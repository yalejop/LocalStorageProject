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

    const tweet = document.querySelector('#tweet').value;
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio');
        
        return; // evita que se ejecuten mas lineas de código
    } 
    console.log('agregando tweet')
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