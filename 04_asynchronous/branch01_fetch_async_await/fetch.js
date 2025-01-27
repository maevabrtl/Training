function putToHTML(offersJson) {
	let offersHTML = document.getElementById("offersList");
	offersHTML = '<ul>\n\t'
	offersHTML += offersJson.map(offer => offersHTML += `<li> ${offer} </li>\n`);
	offersHTML += '</ul>';
	return (console.log('aaaaah'));
}

async function fetchOffers() {
	const response = await fetch("https://codepassport.dev/api/offers");
	const offers = await response.json();
	return (offers);
}

putToHTML(fetchOffers());