
public class Solution {

    private static final int TOTAL_DIGITS = 10;

    public int splitNum(int input) {
        int[] digitsFrequency = new int[TOTAL_DIGITS];
        while (input > 0) {
            ++digitsFrequency[input % 10];
            input /= 10;
        }

        int firstNumber = 0;
        int secondNumber = 0;

        for (int i = 0; i < TOTAL_DIGITS; ++i) {
            while (digitsFrequency[i]-- > 0) {
                if (firstNumber <= secondNumber) {
                    firstNumber = 10 * firstNumber + i;
                } else {
                    secondNumber = 10 * secondNumber + i;
                }
            }
        }

        return firstNumber + secondNumber;
    }
}
