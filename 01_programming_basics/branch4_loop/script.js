// Exercice 1
console.log("\n\tExercice 1\n");

// 1.1
console.log("\t1. Print numbers with for loop :\n");

function printNumbersWithFor() {
	for (let i = 0; i <= 99; i++)
		console.log(i);
}

printNumbersWithFor();

// 1.2
console.log("\n\t2. Print numbers with while loop :\n");

function printNumbersWithWhile() {
	let i = 0;
	while (i <= 99)
		console.log(i++);
}

printNumbersWithWhile();

// 1.3
console.log("\n\t3. Here, the for loop seems more appropriate\n\tbecause it's more readable.\n");

// 1.4
console.log("\n\t4. Print from 50 to 99 :\n");

function printFrom50To99() {
	for (let i = 50; i <= 99; i++)
		console.log(i);
}

printFrom50To99();

// 1.5
console.log("\n\t5. Print from 49 to 1 :\n");

function printFrom49To1() {
	for (let i = 49; i >= 1; i--)
		console.log(i);
}

printFrom49To1();

// Exercice 2
console.log("\n\n\tExercice 2\n");

let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']

function createMessage(letters) {
	let message = "";
	for (let i = 0; letters[i]; i++)
		message += letters[i];
	console.log(message);
}

createMessage(letters);
letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l'];
createMessage(letters);

// DEBUG EX2 : 
// console.log(`i = ${i}\nletters[i] = ${letters[i]}\nmessage = |${message}|\nmessage[i] = ${message[i]}\n`);

// Exercice 3
console.log("\n\n\tExercice 3\n");
console.log("This exercise is down because my VSCode's terminal doesn't support prompt (but it works on online IDEs).\n");

/*
function yourCountdown(start) {
	while (start >= 0)
		console.log(start--);
}

function countdownHandler() {
	let stillPlaying = prompt("Do you want to launch a countdown ? [y/n]");
	if (stillPlaying === 'y' || stillPlaying === 'Y') 
	{
		let start = Number(prompt("Please enter a number to start countdown :"));
		let nbOfTries;
		for (nbOfTries = 0; (start < 0 || isNaN(start) === true) && nbOfTries < 2; nbOfTries++)
			start = Number(prompt(`Please enter a VALID NUMBER :\n(left : ${2 - i} attempt.s)`));
		if (nbOfTries !== 3)
			return (yourCountdown(start));
		else 
			return (console.log("Too many tries, please relaunch the program if you wish to retry."))
  	}
	return (console.log("What a wet blanket !"));
}

countdownHandler();
*/