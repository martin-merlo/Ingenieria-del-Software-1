// Obtenemos los elementos del DOM
const container = document.getElementById('container');
const btnSignIn = document.getElementById('btn-sign-in');
const btnSignUp = document.getElementById('btn-sign-up');

// Añadimos la clase 'toggle' para mover el panel a Registro
btnSignUp.addEventListener('click', () => {
    container.classList.add('toggle');
});

// Quitamos la clase 'toggle' para devolver el panel a Inicio de Sesión
btnSignIn.addEventListener('click', () => {
    container.classList.remove('toggle');
});