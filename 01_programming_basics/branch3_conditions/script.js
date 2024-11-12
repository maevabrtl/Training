// Exercice 1
console.log("Exercice 1\n");

let numbers = [6, -8, 0]

function posOrNeg(nbr) {
	if (nbr < 0)
		console.log("négatif");
	else
		console.log("positif");
}

for (n in numbers) {
	console.log(numbers[n]);
	posOrNeg(numbers[n]);
}

// Exercice 2
console.log("\n\nExercice 2\n");

class driver {
	constructor(_name, _age) {
		this._name = _name;
		this._age = _age;
	}
	static _legalAge = 17;
	static isAllowed (p) {
		return ((p._age > this._legalAge) ? "allowed" : "not allowed");
	}
}

let driversToCheck = [
	{_name : "Matthieu", _age : 22},
	{_name : "Léa", _age : 15},
	{_name : "Jean", _age : 17},
];

function checkAgeToDrive(drivers) {
	for (person in drivers) {
		console.log(`${drivers[person]._name} (${drivers[person]._age}) is ${driver.isAllowed(drivers[person])} to drive.`);
	}
}

checkAgeToDrive(driversToCheck);

// Exercice 3
console.log("\n\nExercice 3\n");
// Part 1
console.log("3 - Part 1\n");

let tmp = 15; 

if (tmp < 0)   
	console.log("Freezing weather.");
else if (tmp < 10)  
	console.log("Very cold weather.");
else if (tmp < 20)  
	console.log("Cold weather.");
else if (tmp < 30)  
	console.log("Normal in temp."); 
else if (tmp < 40)   
	console.log("Its Hot."); 
else  
console.log("Its very hot.");

// Part 2
console.log("\n3 - Part 2\n");

let temp = 45; 
    
switch (true) {
	case (temp < 0) :   
		console.log("Freezing weather.");
		break ;
	case (temp < 10) :
		console.log("Very cold weather.");
		break ;
	case (temp < 20) :  
		console.log("Cold weather.");
		break ;
	case (temp < 30) :  
		console.log("Normal in temp."); 
		break ;
	case (temp < 40) : 
		console.log("Its Hot.");
		break ;
	default :
		console.log("Its very hot.");
}