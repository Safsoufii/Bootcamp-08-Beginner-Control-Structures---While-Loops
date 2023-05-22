//TASK 8 PART 1

function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
  
    while (left <= right) {
      if (word.charAt(left) !== word.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  // Get the word from the user
  let word = prompt("Please enter a word to check if it is a palindrome:");
  
  // Check if the word is a palindrome
  let result = isPalindrome(word);
  
  // Print the result
  if (result) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
  