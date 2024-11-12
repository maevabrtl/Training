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