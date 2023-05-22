//TASK 8 PART 2

const numbers = []; // array to store the numbers entered by the user
let input; // variable to store the user input

while (input !== "-1") { // loop until the user enters "-1"
  input = prompt("Enter a number or -1 to stop:");
  if (input !== "-1") {
    const number = parseInt(input); // parse the input as an integer
    if (!isNaN(number)) { // check if the input is a number
      numbers.push(number); // add the number to the array
    } else {
      console.log("Please enter a valid number.");
    }
  }
}

if (numbers.length > 1) { // check that at least one number was entered
  const sum = numbers.reduce((a, b) => a + b); // calculate the sum of the numbers
  const avg = sum / numbers.length; // calculate the average
  console.log(avg.toFixed(2)); // log the average to the console
}
