//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//eventListeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);

}



//funciones

function agregarTweet(e) {
    e.preventDefault();

    console.log('agregando tweet');
}