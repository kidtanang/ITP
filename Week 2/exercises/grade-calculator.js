// Exercise 1 - Grade Calculator

let score = prompt('Enter a score:');
let grade;

if (score >= 90) {
  console.log("Your grade is"+" "+ "A");
} else if (score >= 80) {
    console.log("Your grade is"+" "+ "B");
} else if (score >= 70) {
    console.log("Your grade is"+" "+ "C");
} else if (score >= 60) {
    console.log("Your grade is"+" "+ "D");
} else {
    console.log("Your grade is"+" "+ "F");
}