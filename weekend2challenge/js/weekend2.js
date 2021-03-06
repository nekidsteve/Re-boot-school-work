
$(document).ready(function() {
// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5
var funf = 5;
function giveMeFive() {
 console.log (funf);
}
//button0
    document.getElementById("five").addEventListener("click", function() {
        console.log(funf);
    });
//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)
var twiddlethumbs = "doing nothing";

function noOp(twiddlethumbs) {
   console.log(twiddlethumbs);
}
document.getElementById("no-op").addEventListener("click", function() {
        no0p();
    });
  
//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.
var x = 15;
var y = 2;
var z = x * y;
function double() {
 console.log(z);
}
 document.getElementById("double").addEventListener("click", function() {
        console.log(z);
    });
//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.
var x = 9
var y = x * x

function square() {
  console.log(y)
}
document.getElementById("squared").addEventListener("click", function() {
        console.log(y);
    });
//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.
var numberArray = [1, 2, 3, 4, 5];
var answer = 0;

function sum() {	
//for(var i in numberArray) { 
	//answer =  answer + numberArray[i]; }};
$.each(numberArray,function() {
    answer += this;
})};
document.getElementById("sum").addEventListener("click", function() {
        console.log(answer);
         });
//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop

function letterIndex() {

}

//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator

function reverseLetterIndex() {

}

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions

function rot13() {

}
});
