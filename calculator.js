class StringCalculator {
    add(numbers) {
      if (!numbers) {
        return 0;
      }
  
      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterLineEnd)); 
        numbers = numbers.substring(delimiterLineEnd + 1);
      }
  
      const numArray = numbers.split(delimiter);
      const parsedNumbers = numArray.map(num => parseInt(num, 10));
  
      // Check for negative numbers
      const negativeNumbers = parsedNumbers.filter(num => num < 0);
      if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      }
  
      return parsedNumbers.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
    }
  }
  
  // Example usage:
  const calculator = new StringCalculator();
  
  console.log(calculator.add(""));         
  console.log(calculator.add("1"));          
  console.log(calculator.add("1,5"));        
  console.log(calculator.add("1\n2,3"));    
  console.log(calculator.add("//;\n1;2"));   
  