// on recupère le h1 de la page
const pageTitle = document.querySelector('h1');
// on recupère dans un tableau tous les éléments qui ont la classe recipe
const recipes = document.querySelectorAll('.recipe');

let hasSubscribed = true;
// on recupère l'élément avec l'id newsletter (# est utilisé pour les ids)
const subscribeButton = document.querySelector('#newsletter');

// si on a souscrit, on change le texte du bouton :
if (hasSubscribed) {
	subscribeButton.innerText = 'Unsubscribe';
}

const tasks = [
	"Finir d'écrire la fiche",
	"Corriger les fautes",
	"Demander à une encadrante de relire",
	"Faire tester à des apprenantes"
];

// on recupère notre liste de tâches (<ul id="tasks"></ul>) :
const listEl = document.querySelector('ul#tasks');
for (const task of tasks) {
	// on ajoute la tache sous forme d'élément li :
	listEl.innerHTML += `<li>${task}</li>`;
}
listEl.innerHTML = ''; // on vide la liste

// on écoute l'évènement clique sur le bouton subscribe
subscribeButton.addEventListener('click', () => {
	// on inverse la valeur de la variable
	hasSubscribed = !hasSubscribed;
	// on change la valeur du texte
	if (hasSubscribed) {
		subscribeButton.innerText = 'Unsubscribe';
	} else {
		subscribeButton.innerText = 'Subscribe';
	}
});