function calculationParallelogram(){
    
    // For Base Calculating
    const base = document.getElementById('base');
    const baseValue = base.value
    const baseNumber = parseFloat(baseValue);

    // For Height Calculating
    const height = document.getElementById('height');
    const heightValue = height.value
    const heightNumber = parseFloat(heightValue);

    // calculation
    const calculate = baseNumber * heightNumber;


    // Result
    const result = document.getElementById('p-result');
    result.innerText = calculate;
}