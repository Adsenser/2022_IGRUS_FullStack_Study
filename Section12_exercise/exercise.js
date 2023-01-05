// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"


const button1 = document.querySelector('button');
const button2 = document.querySelector('#button2'); //쿼리선택자는 css 선택자를 값으로 원함에 주의


// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function clickFunction1() {
    console.dir(button1)
}

function clickFunction2(event) {
    console.dir(event.target) //사실 event 이부분 잘 이해를 못함;
}

button1.addEventListener('click', clickFunction1);
button2.addEventListener('click', clickFunction2);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

//어케 둘을 동시에 선택해서 한 변수에 넣는담...;;
let paragraph1 = document.body.children[2].children[1];
let paragraph2 = paragraph1.nextElementSibling.nextElementSibling;

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function clickFunction1() {
    paragraph1.remove();
}

// 5번 문제 실행되는지 확인하기 위해 일단 주석 처리했음
// // function clickFunction2() {
// //     paragraph2.style.backgroundColor = 'blue';
// }

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function clickFunction2() {
    paragraph2.className = 'blue-bg';
}
