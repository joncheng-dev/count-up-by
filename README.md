Describe: countUpBy()

Test: "It should take a number, and return the same number".
Code:
const userNumber = 5;
countUpBy(userNumber);
Expected Output: 5

Test: "It should take two numbers, and return both accurately."
Code:
const userEndNumber = 50;
const userMultiplier = 2;
countUpBy(userEndNumber, userMultiplier);
Expected Output:
user end number: 50;
user multiplier: 2;

Test: "It should take two numbers, and return the second number multiplied by 2 (user multiplier added to itself)."
Code:
const userEndNumber = 50;
const userMultiplier = 2;
countUpBy(userEndNumber, userMultiplier);
Expected Output:
user end number: 50;
user multiplier: 2;
output: 4;

Test: "It should take two numbers (userEndNumber, userMultiplier) and set the first number (userEndNumber) as an ending point while using the second number to multiply (add to itself) until it reaches the ending point and return the final sum."
Code:
const userEndNumber = 50;
const userMultiplier = 10;
countUpBy(userEndNumber, userMultiplier);
Expected Output:
user end number: 50;
user multiplier: 10;
Output: 50;
