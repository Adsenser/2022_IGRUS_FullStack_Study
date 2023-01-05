let productNamenInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNamenInputElement);

let maxAllowedChars = productNamenInputElement.maxLength; //maxlength가 아니라 maxLength 임에 주의하자 근데. html 상에서는 maxlength임
function updateRemaingCharacters(event) {
    let enteredText= event.target.value;
    let enteredTextLength = enteredText.length; //앞에서 정의한 entredText가 문자열로 받아진다는 것을 알기때문

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNamenInputElement.addEventListener('input',updateRemaingCharacters);