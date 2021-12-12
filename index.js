function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i ++ ) {
    let j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false  
    }
  }
  return true
}

/* 
  Add your pseudocode here
*/
// declare isPalindrome function with word/string passed through as argument
  // iterate through half the word, comparing each letter with the letter at corresponding spot if word was read backward
  // can stop iteration point at half-way point of word (or 1 index earlier in word with odd number of letters)
  // Only need one difference for function to return as false; so need to go through full iteration cycle to know if true

/*
  Add written explanation of your solution here
*/
// This is similar to the solution I came up with in the first palindrome lab, but eliminates some redundancy. 
// First, I had forgotten you could iterate over letters of a string/word! No need to turn it into an array to iterate through it. 
// Second, I was curious earlier if I could just go through half the length of the word, since you only need to compare each pair of letters one time. 
// For words with an odd number of letters, the middle letter is guaranteed to be the same as itself!
// This version of the code has less work to do, and fewer variables declared. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // ALEX TEXT CASE1
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"))
  // ALEX TEST CASE 2
  console.log("Expecting: false")
  console.log("=>", isPalindrome("metaphor"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
