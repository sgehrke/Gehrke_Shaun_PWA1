//Shaun Gehrke, 02-05-14, The Duel - Part I

var p1Name = "Kabal";
var p1Health = 100;

var p2Name = "Kratos";
var p2Health = 100;

var p1maxDamage = 50;
var p2maxDamage = 50;

var p1minDamage = 25;
var p2minDamage = 25;


var round = 1;

function fight(){
	console.log ("this is the function fight");
	alert(p1Name + ":" + p1Health + " *START* " + p2Name + ":" + p2Health);

	for (i=0; i<10; i++){
		var p1Damage = Math.floor(Math.random()*(p1maxDamage - p1minDamage) + p1minDamage);
		var p2Damage = Math.floor(Math.random()*(p2maxDamage - p2minDamage) + p2minDamage);
		
		
		
		
		console.log (p1Damage);
		console.log (p1Damage);

	}
	winnerCheck()
}

function winnerCheck(){
	
}

console.log ("start program");
fight()

/*
alert("Kabal:  *ROUND 1 OVER* Kratos: ");

alert("Kabal:  *ROUND 2 OVER* Kratos: ");

alert("Kabal:  *ROUND 3 OVER* Kratos: ");

alert("Kabal:  *ROUND 4 OVER* Kratos: ");

alert("Kabal:  *ROUND 5 OVER* Kratos: ");

alert("Kabal:  *ROUND 6 OVER* Kratos: ");

alert("Kabal:  *ROUND 7 OVER* Kratos: ");

alert("Kabal:  *ROUND 8 OVER* Kratos: ");

alert("Kabal:  *ROUND 9 OVER* Kratos: ");

alert("Kabal:  *ROUND 10 OVER* Kratos: ");

alert("GAME OVER Kratos Wins!!!");

alert("GAME OVER Kabal Wins!!!");

alert("NO WINNER:("); //if both players die
*/

