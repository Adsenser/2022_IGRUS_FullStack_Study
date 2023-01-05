
const productNamenInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNamenInputElement);

const maxAllowedChars = productNamenInputElement.maxLength; //maxlength가 아니라 maxLength 임에 주의하자 근데. html 상에서는 maxlength임

function updateRemaingCharacters(event) {
    const enteredText= event.target.value;
    const enteredTextLength = enteredText.length; //앞에서 정의한 entredText가 문자열로 받아진다는 것을 알기때문

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if ( remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        productNamenInputElement.classList.add('error');
        // productNamenInputElement.className = 'warning';
    } else if (remainingCharacters <= 10)
     {
        remainingCharsElement.classList.add('warning');
        productNamenInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNamenInputElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('warning', 'error');
        productNamenInputElement.classList.remove('warning', 'error');
    }
}



productNamenInputElement.addEventListener('input',updateRemaingCharacters);