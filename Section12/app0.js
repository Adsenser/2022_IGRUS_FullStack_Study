// console.dir(window.document)
// document.body.children[2].children[0].href = 'https://google.com';

// let acnchorElement = document.getElementById('id1');
// acnchorElement.href = 'https://google.com'

// document.querySelector('#id1')

// answer1 = document.body.children[0];
// document.body.children[1];
// document.body
// document.getElementById('id2')
// document.querySelector('p') = 'AAAAA'

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://naver.com'
newAnchorElement.textContent = 'go to naver'

let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement)