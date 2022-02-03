//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//eventListeners
eventListeners();

function eventListeners() {
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets)

        crearHTML();
    })


}



//funciones

function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    //validacion
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        
        return; // evita que se ejecuten mas lineas de código
    } 
    
    //añadir al arreglo de tweets
    const tweetObj = {
        id: Date.now(),
        tweet, //tweet = tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //una vez agregado vamos a crear el HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}

//mostrar Mensaje de Error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //quitar el mensaje despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            //agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el HTML
            const li = document.createElement('li');
            //añadir el texto
            li.textContent = tweet.tweet;

            //asignar el botón
            li.appendChild(btnEliminar);

            //insertar en el html
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}