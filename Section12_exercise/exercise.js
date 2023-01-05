// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

console.dir(window.document.body.children[2]);

const button1 = document.body.children[2].children[4];
const button2 = document.getElementById('button2');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function clickFunction1() {
    console.dir(document.body.children[2].children[4])
}

function clickFunction2() {
    console.dir(document.body.children[2].children[6])
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
let paragraph2 = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function clickFunction1() {
    paragraph1.remove();
}

function clickFunction2() {
    paragraph2.style.backgroundColor = 'blue';
}

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

paragraph2.classList.add('set-color');