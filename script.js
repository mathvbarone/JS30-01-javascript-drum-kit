
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //VARIÁVEL REFERENTE AOS AUDIOS
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//VARIÁVEL REFERENTE AOS BOTÕES
    if(!audio) return; //PARA A FUNÇÃO DE RODAR SEMPRE
    audio.currentTime = 0; //SETA O CURRENT TIME DE AUDIO PARA 0
    audio.play(); //TOCA O AUDIO
    key.classList.add('playing'); //ADICIONA A CLASSE PLAYING
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // RETORNA CASO NÃO SEJA UM TRANSFORM
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // SELECIONANDO AS KEYS
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //REMOVENDO A TRANSIÇÃO
window.addEventListener('keydown', playSound);