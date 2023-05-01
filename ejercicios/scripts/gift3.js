function abrirRegalo() {
    const image = event.currentTarget;
    image.src = 'img/regaloImg/giphy.gif';
    
    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades';

    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);