function calculateTriangleArea(){

    // for Base
    const inputB = document.getElementById('input-b');
   const triangleBaseText = inputB.value
   const base = parseFloat(triangleBaseText);
   inputB.value = "";

    //for height
    const inputH = document.getElementById('input-h');
    const triangleHeightText = inputH.value
    const height = parseFloat(triangleHeightText);
    inputH.value = "";

    // calculate triangle area
    const triangleArea =  0.5 * base * height

    const result = document.getElementById('result');
    result.innerText = triangleArea

}