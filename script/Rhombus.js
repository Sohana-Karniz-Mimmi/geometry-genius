function calculateRhombus(){
    const outputB = getInputValue('rom-b');
    const outputH = getInputValue('rom-h');
    const calculateRhombus = 0.5 * outputB * outputH

    getInnerText('rom-result', calculateRhombus);
}