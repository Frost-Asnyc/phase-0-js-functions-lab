// This is required for the test to function properly

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
// Function to calculate tax based on a given amount (10% tax)
// Function 1: calculateTax
// Function 1
function calculateTax(amount) {
  return amount * 0.1;
}

// Function 2
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

// Function 4
function isPalindrome(word) {
  let lowercaseWord = word.toLowerCase();
  let reversedWord = lowercaseWord.split("").reverse().join("");
  return lowercaseWord === reversedWord;
}

// Function 5
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}

console.log(calculateTax(250)); // 25
console.log(convertToUpperCase("hello")); // HELLO
console.log(findMaximum(15, 27)); // 27
console.log(isPalindrome("RaceCar")); // true
console.log(calculateDiscountedPrice(100, 20)); // 80
