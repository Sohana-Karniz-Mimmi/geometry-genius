function calculationRectangleArea(){

    // For Length
    const length = document.getElementById('rectangle-L');
    const lengthValue = length.value;
    const rectangleLength = parseFloat(lengthValue)


    // For Width
    const rectangleW= document.getElementById("rectangle-w");
    const widthValue = rectangleW.value;
    const rectangleWidth = parseFloat(widthValue);

    // Rectangle Calculations
    const rectangle = rectangleLength * rectangleWidth
    const result = document.getElementById('r-result');
    result.innerText = rectangle
   
}