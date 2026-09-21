"use strict"
let films = [
    // Id, Title, Favorite, Watch date, Rating (0-5)
    [1, "Pulp Fiction", true, "10-03-2024", 5],
    [2, "21 Grammi", true, "17-03-2024", 3],
    [3, "Star Wars", false, "15-03-2024", 1],
    [4, "Matrix", false, "01-01-2023", 4],
    [5, "Shrek", false, "21-03-2024", 2],
    [6, "Kill Bill Vol. 1", true, "22-04-2024", 5],
    [7, "Inception", true, "18-04-2024", 5]
];

let tBody = document.getElementsByTagName("tbody")[0];

addEventListeners()
visualizza()

function addEventListeners(){
    let btnAdd = document.getElementById("btn-add")
    btnAdd.addEventListener("click", addNewFilm)
    btnClear.addEventListener("click", pulisciLista)
}

function visualizza(){
    tBody.innerHTML=""
    for (const film of films) {
        let row = document.createElement("tr");
        tBody.appendChild(row);
        for (let i = 0; i < film.length; i++) {
            const field = film[i];
            let cell = document.createElement("td");
            row.appendChild(cell);
            if (i == 2) {
                // è il campo "preferito"
                createPreferitoInnerHtml(cell, field);
            } else if (i == 4) {
                // è il campo "rating"
                createRatingInnerHtml(cell, field);
            } else {
                // altro campo, lo tratto come stringa
                cell.innerHTML = field;
            }
        }
    }
}

function createPreferitoInnerHtml(cell, preferitoValue) {
    let check = document.createElement("input");
    check.type = "checkbox";
    check.disabled = true;
    check.checked = preferitoValue;
    cell.appendChild(check);
}

function createRatingInnerHtml(cell, ratingValue) {
    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i");
        if (i < ratingValue) {
            star.classList.add("bi", "bi-star-fill");
        } else {
            star.classList.add("bi", "bi-star");
        }
        cell.appendChild(star);
    }
}

function addNewFilm(){
    let id = films.length + 1
    let title = prompt("Inserire il titolo del nuovo film ")
    let aus = random(0,2)
    let favorite = Boolean(aus)
    //console.log(favorite)
    let today=(new Date()).toLocaleDateString().replaceAll("/", "-")
    let rating = random(1,6)

    let film =[]
    film.push(id)
    film.push(title)
    film.push(favorite)
    film.push(today)
    film.push(rating)

    films.push(film)
    visualizza()
}

function pulisciLista(){
    films=[]
    visualizza()
}


function random(min, max){
    return (Math.floor((max-min)*Math.random())) + min
}