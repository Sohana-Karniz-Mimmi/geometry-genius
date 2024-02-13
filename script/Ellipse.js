function calculateEllipse(){
    // major calculate
    const major = document.getElementById('major');
    const majorValue = major.value;
    const majorNumber = parseFloat(majorValue);

    // minor calculate
    const minor = document.getElementById('minor');
    const minorValue = minor.value;
    const minorNumber = parseFloat(minorValue);

    // calculation
    const calculation = 3.14 * majorNumber * minorNumber;

    // result
    const result = document.getElementById('e-result');
    result.innerText = calculation;
}