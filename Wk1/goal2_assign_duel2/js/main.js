/*
Name: Shaun Gehrke,
Date: 02-10-14
Assignment: The Duel - Part 2
*/

var p1Array = ["Kabal", 100, 15];
var p2Array = ["Kratos", 100, 15];

/*
********************************** Info now contained in an Array *******
//Player one name and health
var p1Name = "Kabal";
var p1Health = 100;

//Player two name and health
var p2Name = "Kratos";
var p2Health = 100;

//Player maximum damage
var p1maxDamage = 15;
var p2maxDamage = 15;
*/
/*
**************************************** Moved inside the function ********
//Player minimum damage 
var p1minDamage = p1maxDamage * .5;
var p2minDamage = p2maxDamage * .5;
*/

//The round of the fight with ++ later that will start the round at 1
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
	//	console.log (p1Damage);
	//	console.log (p1Damage);
	//	console.log ("p1: " + p1Health);
	//	console.log ("p2: " + p2Health);
	//Round ++ will add one to the round each time through the loop
		round++
		console.log(p1Name + ":" + p1Health + " *ROUND " + round + " OVER* " + p2Name + ":" + p2Health);

//This var catches the result of the winnersCheck() Function
		var result = winnerCheck();
		console.log (result);

//This conditional will run after the winnercheck and the result is input to see what will run		
		if (result === "No Winner"){
		alert(p1Name + ":" + p1Health + " *ROUND " + round + " OVER* " + p2Name + ":" + p2Health);
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
		if (p1Health < 1 && p2Health <1){
			result = "You Both Die";
		} else if ( p1Health <1){
			result = p2Name + " WINS!!!"
		} else if ( p2Health <1){
			result = p1Name + " WINS!!!"
		}
		return result;
		console.log (result);
	
}

//This console was printed to ensure the program was linked
console.log ("start program");
fight();



