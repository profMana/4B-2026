'use strict'

const wrapper = document.querySelector("#wrapper");
const wrapper_li = wrapper.querySelectorAll("li")
const btns = document.querySelectorAll("#buttons input[type=button]");



// funzione di visualizzazione richiamata dall'html
function evidenzia(selectorString){
    /* 1 soluzione
    for(const li of wrapper_li)
        li.style.backgroundColor=""

	let elements = wrapper.querySelectorAll(selectorString)
    // in js non si possono applicare effetti ad una intera nodelist
    // elements.style.backgroundColor = "yellow"
    for (const element of elements){
        element.style.backgroundColor = "yellow"
    }
    */

    /* 2° soluzione con un unico ciclo for */
    for(const li of wrapper_li){
        li.style.backgroundColor=""
        if (li.matches(selectorString))
            li.style.backgroundColor="yellow"
    }
}

btns[0].addEventListener("click", function(){
    alert ("Gli elementi sono " + wrapper_li.length)
})

btns[1].addEventListener("click", function(){
    let msg = ""
    // for (const li of wrapper_li)
    wrapper_li.forEach(function(li, i){
        msg += li.textContent + "\n"
    })
    alert (msg)
})

btns[2].addEventListener("click", function(){
    /*
    const li_pari = wrapper.querySelectorAll("li:nth-of-type(even)")
    li_pari.forEach(function(item, i)){
        item.stye.backgroundColor="yellow"
    })
    */
    evidenzia("li:nth-of-type(even)")
     
})

// GESTIONE PULSANTI
