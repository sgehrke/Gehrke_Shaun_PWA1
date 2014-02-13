/*
Name: Shaun Gehrke,
Date: 02-11-14
Assignment: Goal2 - jspractice
*/


console.log("********************************************** problem 1");
/*
create a function named 'avgNumbers'
- accept 1 parameter into the function that will be an array of unlimited numbers
- find the average of all the numbers
- return the average from the function
- console.log the answer outside of the function
*/

 
var arrayNumbers = [1,1,6,8,2,7,8,2,5,9];

function avgNumbers(array){
	var total = 0;
	for (var i = 0, x = array.length; i < x; i++) {
	    total += array[i];
	}
	var average = total / x;
	return average;	
}

var average = avgNumbers(arrayNumbers);
console.log (average);




console.log("********************************************** problem 2");
/*
create a function named 'fullName'
- accept 2 parameters into the function that are strings (firstname and lastname)
- return the name after it has been concatenated
- console.log the answer outside of the function
*/

var firstName = "Shaun ";
var lastName = "Gehrke ";

function fullName(first, last){
	var combName = first.concat(last);
	return combName;
}

var name = fullName(firstName, lastName);
console.log (name);




console.log("********************************************** problem 3");
/*
create a function named 'wordCount'
- accept 1 parameter into the function that is a long string of text words
- create a function that counts all the words and return the answer
- console.log the answer outside of the function
*/


var wordString = "This is a test to see if my function can come up with the result 16.";

function wordCount(string){
	var words = string.split(" ").length;
	return words;
}

var words = wordCount(wordString);
console.log (words);





console.log("********************************************** problem 4");
/*
create a function named 'charCount'
- accept 1 parameter into the function that is a long string of text
- return length of the array of string characters
- console.log the answer outside of the function
*/

var longString = "alkbosdhfbhsdbfiebcniabsdgk";

function charCount(text){
	var text = longString.length;
	return text;
	
	
}

var characters = charCount(longString);
console.log (characters);



console.log("********************************************** problem 5");

/* problem 5 
create a function named 'vowelsInWord'
- accept 1 parameter into the function that is a a one word string
- return the number of vowels in the word
- console.log the answer outside of the function
*/


var word = "aeiou";
var counter = 0;

function vowelsInWord(vowels){

	for ( var i=0, x=vowels.length; i<x; i++){
		var vowelsArray = vowels.split("");
	
		switch (vowelsArray[i]) {
			case "a": 
				counter++;
				break;
			case "e": 
				counter++;
				break;
			case "i": 
				counter++;
				break;
			case "o": 
				counter++;
				break;
			case "u": 
				counter++;
				break;
		} 
	} return counter;
}

var vowelCount = vowelsInWord(word);
console.log (vowelCount);






console.log("********************************************** problem 6");
/*
create a function named 'findNum'
- accepts 2 parameters into the function - 1. array of numbers, 2. boolean
- if the second parameter being passed is "false" or null then
 - create an array with all of the odd numbers from the array
- else
 - create an array with all of the even numbers from the array
- return the array

*/

var myarray = [1,2,3,4,5,6,7,8,9];
var myBoolean = false;

function findNum(myArray, myBoolean){
	var odd = [];
	var even = [];
	
	for ( var i=0; i< myArray.length; i++){
	    if(i % 2 === 0) {
       		odd.push(myArray[i]);
		} else { 
			even.push(myArray[i]);		
		}
}

	if (myBoolean){
		return even;
	} else {
		return odd;
	}
}


var foundNum = findNum(myarray, myBoolean);
console.log (foundNum);



