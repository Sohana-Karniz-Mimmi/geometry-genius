
function calculatePentagon(){
    const inputB = getInputValue('input-p-b');
    const inputH = getInputValue('input-p-h');
    const calculate = 0.5 * inputB * inputH;
    getInnerText('penta-result', calculate);
}





// Reuseable functions
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    const inputNumber = parseFloat(inputFieldValue);

    return inputNumber;
}

function getInnerText(innerTextValue, value){
    const innerText = document.getElementById(innerTextValue);
    innerText.innerText = value;
    return innerText;
}