// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with
// the number of replies for each option. This data is stored in the starter 'poll' object below.
// const poll = {
// question: "What is your favourite programming language?",
// options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// answers: new Array(4).fill(0), // This generates [0, 0, 0, 0].
// };
// Your tasks:
// 1. Create a method called registerNewAnswer on the poll object. The method does 2
// things:
// • 1.1. Display a prompt window for the user to input the number of the selected
// option. The prompt should look like this:
//  What is your favourite programming language?
//  0: JavaScript
//  1: Python
//  2: Rust
//  3: C++
//  (Write option number)

// Create the prompt string using the properties (question & options) from the
// poll object.
// • 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by 1.
// Make sure to check if the input is a number and if the number makes sense
// (e.g. answer 52 wouldn't make sense, right?)
// 2. Create a “Answer Poll” button on your webpage.
// 3. Call registerNewAnswer method whenever the user clicks the "Answer poll" button
// 4. Create a method displayResults which displays the poll results.
// 5. Run the displayResults method at the end of each registerNewAnswer method cal

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0), // Initialize answers array

  const registerNewAnswer =()=>{
    console.log("Poll question: ", poll.question);
    console.log("Options: ", poll.options);
    console.log("Current answers: ", poll.answers);
    const answer = Number(prompt("Please select the option number: "));
    if (answer >= 0 && answer < poll.options.length) {
        poll.answers[answer]++;
        console.log("Updated answers: ", poll.answers);
        } else {
            console.log("Invalid answer");
            }
  }

};
// 2. Create a “Answer Poll” button on your webpage.


<button onclick="poll.registerNewAnswer()">Answer Poll</button>
        

// document.querySelector("#answerPoll").addEventListener("click", () => {
//   poll.registerNewAnswer();
// });
