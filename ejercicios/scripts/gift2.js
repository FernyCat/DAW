function abrirRegalo() {
    const image = event.currentTarget;
    image.src = 'img/regaloImg/giphy.gif';
    image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);