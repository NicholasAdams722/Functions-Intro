//Addition Function
const add = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  return sum;
};

let result = add(17, 9);
console.log(result) > 26;

result = add(-13, -7);
console.log(result) > -20;

result = add(4, 58);
console.log(result) > 62;

//Subtraction Function
const subtract = (numberOne, numberTwo) => {
  const difference = numberOne - numberTwo;
  return difference;
};

let result1 = subtract(10, 4);
console.log(result1);

//multiplication function
const multiply = (numberOne, numberTwo) => {
  const product = numberOne * numberTwo;

  return product;
};

let result2= multiply(10, 4)
console.log(result2)

//Division function
const divide = (numberOne, numberTwo) =>{
    const quotient= numberOne /numberTwo

    return quotient;
};

let result3= divide(10, 4)
console.log(result3)

//Square function
const square = (originalNumber) => {
    const squared= originalNumber * originalNumber

    return squared;
}

let result4= square(4)
console.log(result4)