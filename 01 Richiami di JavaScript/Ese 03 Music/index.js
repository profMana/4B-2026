"use strict"

// window.addEventListener("load", function() {	// non serve perché usiamo defer

const content = document.getElementById("content")	// non indispensabile
const genderElements = document.querySelectorAll(".dropdown-menu li");

for (let genderElement of genderElements) {
	genderElement.addEventListener("click", genderClick)
}

const iFriends = document.getElementById("i-friends");
iFriends.addEventListener("click", showAlert);
const alertFriends = document.getElementById("alert-friends");

const iSearch = document.getElementById("i-search");
iSearch.addEventListener("click", toggleSearch);
const txtSearch = document.getElementById("txt-search");

loadSongs();

function loadSongs() {
	const h3 = document.createElement("h3")
	h3.textContent = "Numero di canzoni: " + songs.length
	content.append(h3);
	for (const song of songs) {
		// creo la riga
		const row = document.createElement("div")
		row.classList.add("row", "border", "rounded", "p-2", "m-2");
		content.append(row);
		// creo le colonne
		const col1 = document.createElement("div")
		col1.classList.add("col-md-4", "col-xl-3")
		const col2 = document.createElement("div")
		col2.classList.add("col-md-8", "col-xl-9")
		row.append(col1, col2);
		// riempio col1
		const img = document.createElement("img")
		img.classList.add("w-100", "rounded")
		img.src = "img/cover" + song[0] + ".jpg"
		col1.append(img)
		// riempio col2
		const h2 = document.createElement("h2")
		h2.textContent = song[0] + " - " + song[1]
		const h5 = document.createElement("h5")

		// h5= document.createElement("h5")
		// h5 = document.createElement("h5")
		// h5 = document.createElement("h5")
	}
}

function genderClick() {
	
}

function showAlert() {
	
}

function toggleSearch() {
	
}








// });

