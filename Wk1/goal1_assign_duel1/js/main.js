//Shaun Gehrke, 02-05-14, The Duel - Part I

var p1Name = "Kabal";
var p1Health = 100;

var p2Name = "Kratos";
var p2Health = 100;

var p1maxDamage = 15;
var p2maxDamage = 15;

var p1minDamage = p1maxDamage * .5;
var p2minDamage = p2maxDamage * .5;


var round = 0;

function fight(){
	console.log ("this is the function fight");
	
	alert(p1Name + ":" + p1Health + " *START* " + p2Name + ":" + p2Health);

	for (i=0; i<10; i++){
		var p1Damage = Math.floor(Math.random()*(p1maxDamage - p1minDamage) + p1minDamage);
		var p2Damage = Math.floor(Math.random()*(p2maxDamage - p2minDamage) + p2minDamage);
		
		p1Health -= p1Damage;
		p2Health -= p2Damage;
	//	console.log (p1Damage);
	//	console.log (p1Damage);
	//	console.log ("p1: " + p1Health);
	//	console.log ("p2: " + p2Health);
		round++
		console.log(p1Name + ":" + p1Health + " *ROUND " + round + " OVER* " + p2Name + ":" + p2Health);

		var result = winnerCheck();
		console.log (result);
		
		if (result === "No Winner"){
		alert(p1Name + ":" + p1Health + " *ROUND " + round + " OVER* " + p2Name + ":" + p2Health);
		} else {
			alert(result);
			break;
		}
	}
}
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
console.log ("start program");
fight();



