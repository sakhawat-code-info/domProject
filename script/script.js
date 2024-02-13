function calculateTriangleArea() {
    const base = getInputFromId('inputBase');
    const height = getInputFromId('inputHeight')

    const area = 0.5 * base * height;

    showResult('result', area);
}





function getInputFromId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId).value;
    const base = parseFloat(inputField);
    return base;
}


function showResult(takeShowId, result) {
    const showId = document.getElementById(takeShowId);
    showId.innerText = result;
}



