/*
Name: Shaun Gehrke,
Date: 02-11-14
Assignment: Goal2 - jspractice
*/


//*****************************************problem 1 'avgNumbers' 
var arrayNumbers = [1,1,6,8,2,7,8,2,5,9]

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




//*****************************************problem 2 'fullName'
var firstName = "Shaun ";
var lastName = "Gehrke ";

function fullName(first, last){
	var combName = first.concat(last);
	return combName;
}

var name = fullName(firstName, lastName);
console.log (name);




//******************************************problem 3 'wordCount'
var wordString = "This is a test to see if my function can come up with the result 16.";

function wordCount(string){
	var words = string.split(" ");
	return words.length;
}

var words = wordCount(wordString);
console.log (words);











