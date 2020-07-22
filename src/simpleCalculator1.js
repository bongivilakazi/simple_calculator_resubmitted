
//function adds two numbers
function addition(f, g) {
  var sum = 0
  var sum = f + g
  return sum
}
 console.log(addition(3, 4))


//function multiplies two numbers
function multiply(c, d) {
  var product = 0;
  var product = c * d
  return product;
}
console.log(multiply(3, 4));

//function  adds  multiple numbers
function AddMultipleNumbers() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
} 
console.log("Adding numbers");
 console.log(AddMultipleNumbers(1, 2, 3, 10));

//function multiplies multiple numbers
function multiplyMultipleNumbers() {
  var product = 1;
  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i]
  }
  return product
}
console.log("multiplying numbers")
 console.log(multiplyMultipleNumbers(1, 2, 3, 10))

module.exports ={ multiplyMultipleNumbers ,AddMultipleNumbers,
  multiply,addition

}