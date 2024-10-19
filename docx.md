
StringCalculator Class

Method: add(numbers: string): number

- Input: A string of numbers separated by a delimiter (default: comma or newline).
- Returns: Sum of numbers as an integer.
- Throws: Error if negative numbers are found with the message "Negative numbers not allowed: [negatives]".

Features:
1. Empty string returns 0.
2. Single number returns that number.
3. Supports multiple numbers separated by commas or newlines.
4. Custom delimiters with format "//[delimiter]\n[numbers]".
5. Negative numbers throw an exception listing all negatives.

Example:
const calculator = new StringCalculator();
calculator.add("");           // Output: 0
calculator.add("1");          // Output: 1
calculator.add("1,5");        // Output: 6
calculator.add("1\n2,3");     // Output: 6
calculator.add("//;\n1;2");   // Output: 3
calculator.add("1,-2,3");     // Throws: "Negative numbers not allowed: -2"