const idTag = document.querySelector("span");
const quoteTag = document.querySelector(".quote");
const dice = document.querySelector(".dice");

dice.onclick = () => {
let idQuote = Math.floor(Math.random()*200)+1;
let url = `https://api.adviceslip.com/advice/${idQuote}`;
let data;
fetch(url)
    .then(function(response){
        if (response.ok) {
            return response.json()
        } else {
            data = 'Error en la respuesta de la API';
        }
    })
    .then(function(json){
        if (json) {
            data = json.slip.advice;
            idTag.innerHTML = idQuote;
            quoteTag.innerHTML = `"${data}"` 
        }
    });
}   

