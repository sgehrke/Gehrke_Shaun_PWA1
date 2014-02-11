/*
Name: Shaun Gehrke,
Date: 02-11-14
Assignment: Goal2 - jspractice
*/

var arrayNumbers = [1,4,6,8,2,7,8,2,5,9]

function avgNumber(array){
	var total = 0;
	for (var i = 0, x = array.length; i < x; i++) {
	    total += array[i];
	}
	var average = total / x;
	return average;	
}

var average = avgNumber(arrayNumbers);
console.log (average);
