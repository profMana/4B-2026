'use strict'

// pointers
const listView = document.getElementById("list-view");
const divNbooks = listView.querySelector(".nBooks")
const tBody = listView.querySelector("tbody");

const detailsView = document.getElementById("details-view");
const details = detailsView.querySelector(".details")
const pageLabel = detailsView.querySelector("span")

const addView = document.getElementById("add-view");
const newBook = addView.querySelector(".details")

const headerButtons = document.getElementsByClassName("headerBtn")
const btnListView = headerButtons[0]
const btnDetailsView = headerButtons[1]
const btnAddView = headerButtons[2]
const btnSave = headerButtons[3]

let id, titolo, categoria, lingua, autori, anno, prezzo
let detailIndex = 0

// carico il bookstore
let bookstore = localStorage.getItem("bookstore")
if (!bookstore)
    bookstore = datiIniziali
console.log(bookstore)

// parsing del bookstore
const parser = new DOMParser()
const xmlDoc = parser.parseFromString(bookstore, "text/xml")

// prendiamo xmlroot
const xmlRoot = xmlDoc.firstElementChild

// gestiamo i pulsanti della toolbar
btnListView.addEventListener("click", showList)
btnDetailsView.addEventListener("click", showDetails)
btnAddView.addEventListener("click", showAdd)

// carichiamo i libri
showList()

function loadBooks() {
    tBody.innerHTML = ""
    for (const book of xmlRoot.children) {
        readFields(book)

        let tr = document.createElement("tr")
        tBody.append(tr)

        let td = document.createElement("td")
        td.textContent = id
        tr.append(td)

        td = document.createElement("td")
        td.textContent = titolo
        tr.append(td)

        td = document.createElement("td")
        td.textContent = categoria
        tr.append(td)

        td = document.createElement("td")
        td.textContent = lingua
        tr.append(td)

        td = document.createElement("td")
        td.textContent = autori
        tr.append(td)

        td = document.createElement("td")
        td.textContent = anno
        tr.append(td)

        td = document.createElement("td")
        td.textContent = prezzo
        tr.append(td)

        td = document.createElement("td")
        let btn = document.createElement("button")
        btn.textContent = "Delete"
        td.append(btn)
        tr.append(td)
    }
}

function loadDetails() {
    details.innerHTML = ""
    if (xmlRoot.children.length > 0) {
        const book = xmlRoot.children[detailIndex]
        readFields(book)
        createDetailLine("Id", id)
        createDetailLine("Titolo", titolo)
        createDetailLine("Categoria", categoria)
        createDetailLine("Lingua", lingua)
        createDetailLine("Autori", autori)
        createDetailLine("Anno", anno)
        createDetailLine("Prezzo", prezzo)
    }
}

function createDetailLine(key, value) {
    let lbl = document.createElement("label")
    lbl.textContent = key
}

function readFields(book) {
    id = book.getElementsByTagName("id")[0].textContent
    titolo = book.querySelector("title").textContent
    categoria = book.getAttribute("category") || ""
    // categoria = book.category // ERRORE: in XML si possono usare solo attributi statici
    lingua = book.querySelector("title").getAttribute("lang") || ""
    autori = ""
    for (const author of book.getElementsByTagName("author")) {
        autori += author.textContent + " - "
    }
    autori = autori.substring(0, autori.length - 3)
    anno = book.getElementsByTagName("year")[0]?.textContent || ""
    prezzo = book.querySelector("price")?.textContent || ""
    console.log(id, titolo, categoria, lingua, autori, anno, prezzo)
}

function showList() {
    reset()
    listView.style.display = ""
    btnListView.classList.add("active")
    loadBooks()
}

function showDetails() {
    reset()
    detailsView.style.display = ""
    btnDetailsView.classList.add("active")
    loadDetails()
}

function showAdd() {
    reset()
    addView.style.display = ""
    btnAddView.classList.add("active")
}

function reset() {
    for (const div of container.children) {
        div.style.display = "none"
    }
    for (const btn of headerButtons) {
        btn.classList.remove("active")
    }
}