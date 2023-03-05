
/**
 * @param {number} input
 * @return {number}
 */
var splitNum = function (input) {
    const TOTAL_DIGITS = 10;
    const digitsFrequency = new Array(TOTAL_DIGITS).fill(0);
    while (input > 0) {
        ++digitsFrequency[input % 10];
        input = Math.floor(input / 10);
    }

    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = 0; i < TOTAL_DIGITS; ++i) {
        while (digitsFrequency[i]-- > 0) {
            if (firstNumber <= secondNumber) {
                firstNumber = 10 * firstNumber + i;
            } else {
                secondNumber = 10 * secondNumber + i;
            }
        }
    }
    return firstNumber + secondNumber;
};
