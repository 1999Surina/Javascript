//  JavaScript Assignment 1

// Q1 Write a program to demonstrate how a function can be passed as a parameter to another function.


function displayValue(value){
  return console.log(value);
}

function addition(a, b){
  return a+b;
}

function calculate(){
  let a = 10;
  let b = 20;

  let c = addition(a,b);

  let display = `${a} + ${b} = ${c}`;

  displayValue(display);
}

calculate();


// Q2 An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments For the arguments Roger and Waters, the function retums RW. Write this function. 
// Submit the github link to the code


const arrowfun = (firstName, lastName) => {
  return firstName[0] + lastName[0];
}

console.log(arrowfun('Roger', 'Waters('));