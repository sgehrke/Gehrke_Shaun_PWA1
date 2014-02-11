/*
Name: Shaun Gehrke,
Date: 02-10-14
Assignment: The Duel - Part 2
*/

var p1Array = ["Kabal", 100, 15];
var p2Array = ["Kratos", 100, 15];


var round = 0;


//The first required function that runs a for loop to increment the rounds
function fight(){
	console.log ("this is the function fight");
	
	alert(p1Array[0] + ":" + p1Array[1] + " *START* " + p2Array[0] + ":" + p2Array[1]);
//The for loop contains a math.floor which round down to the nearest integer
	for (i=0; i<10; i++){
		var p1minDamage = p1Array[2] * .5;
		var p2minDamage = p2Array[2] * .5;
		var p1Damage = Math.floor(Math.random()*(p1Array[2] - p1minDamage) + p1minDamage);
		var p2Damage = Math.floor(Math.random()*(p2Array[2] - p2minDamage) + p2minDamage);
		
		p1Array[1] -= p1Damage;
		p2Array[1] -= p2Damage;
	
		round++
		console.log(p1Array[0] + ":" + p1Array[1] + " *ROUND " + round + " OVER* " + p2Array[0] + ":" + p2Array[1]);

//This var catches the result of the winnersCheck() Function
		var result = winnerCheck();
		console.log (result);

//This conditional will run after the winnercheck and the result is input to see what will run		
		if (result === "No Winner"){
		alert(p1Array[0] + ":" + p2Array[1] + " *ROUND " + round + " OVER* " + p2Array[0] + ":" + p2Array[1]);
		} else {
			alert(result);
			break;
		}
	}
}

//This is the function that will check for a winner 
function winnerCheck(){
	console.log("in winnercheck");
	var result = "No Winner";
		if (p1Array[1] < 1 && p2Array[1] <1){
			result = "You Both Die";
		} else if ( p1Array[1] <1){
			result = p2Array[0] + " WINS!!!"
		} else if ( p2Array[1] <1){
			result = p2Array[0] + " WINS!!!"
		}
		return result;
		console.log (result);
	
}

//This console was printed to ensure the program was linked
console.log ("start program");
fight();



