//TASK 8 PART 3


const questions = [
  {
    question: "What colour is the sky?",
    options: ["Purple", "Pink", "Blue", "Yellow"],
    correct: "Blue"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correct: "Paris"
  }
];

let correctAnswers = 0; // variable to store the number of correct answers

questions.forEach(questionData => {
  const { question, options, correct } = questionData;
  let answer;
  let isCorrect = false; // flag to track whether the answer is correct

  do {
    // Display the question and options to the user
    console.log(question);
    options.forEach((option, index) => {
      console.log(`${String.fromCharCode(97 + index)}. ${option}`);
    });

    // Prompt the user to enter their answer
    answer = prompt("Enter the letter of your answer:");

    // Check if the answer is valid (a letter between 'a' and the number of options)
    if (answer >= 'a' && answer <= String.fromCharCode(97 + options.length - 1)) {
      // Check if the answer is correct
      if (options[answer.charCodeAt(0) - 97] === correct) {
        console.log("Correct!");
        isCorrect = true;
        correctAnswers++; // increment the number of correct answers
      } else {
        console.log("Incorrect. Please try again.");
      }
    } else {
      console.log("Invalid answer. Please try again.");
    }
  } while (!isCorrect);
});

// Display the score
console.log(`You got ${correctAnswers} out of ${questions.length} questions correct.`);

  
  