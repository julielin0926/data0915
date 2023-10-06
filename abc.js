var A = Math.floor (Math.random()*11);
console.log (A);
var readline = require("readline-sync");

while(true){
var guess = readline.question("please a number between 0 and 10");
console.log(guess)

if (isNaN (guess)|| guess > 10 || guess < 0)
    continue;
else
}