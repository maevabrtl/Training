let countButton = document.getElementById("counter");
let count = 0;

countButton.addEventListener('click', () => {
	count++;
	console.log(count);
	countButton.innerHTML = `${count} clics!`;
});