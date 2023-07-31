// eslint-disable-next-line no-undef
const mario = document.getElementById('mario');
// eslint-disable-next-line no-undef
const pipe = document.getElementById('pipe');
// eslint-disable-next-line no-undef
const cloud = document.getElementById('cloud');
// eslint-disable-next-line no-undef
const gameOver = document.getElementById('game-over');
// eslint-disable-next-line no-undef
const iniciarButton = document.getElementById('iniciar');
// eslint-disable-next-line no-undef
const reiniciarButton = document.getElementById('reiniciar');

pipe.style.animation = 'none';
pipe.style.left = '190px';

mario.src = 'imagens/game-over.png';
mario.style.width = '100px';
mario.style.marginLeft = '50px';


function jump() {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 650);
}

function iniciar() {
  pipe.style.animation = 'pipe-animation 1.7s infinite linear';
  pipe.style.left = '';

  mario.src = 'imagens/mario.gif';
  mario.style.width = '180px';

  iniciarButton.style.display = 'none';
}

function reiniciar() {
  // eslint-disable-next-line no-undef
  location.reload();// reiniciar o codigo
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;/* deslocamento esquerdo */
  const cloudPosition = cloud.offsetLeft;
  // eslint-disable-next-line no-undef
  const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

  // eslint-disable-next-line no-console
  console.log(cloudPosition);

  if (pipePosition <= 150 && pipePosition > 10 && marioPosition < 70) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    cloud.style.animation = 'none';
    cloud.style.left = `${cloudPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = 'imagens/game-over.png';
    mario.style.width = '100px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);// parar loop

    gameOver.style.display = 'block';

    reiniciarButton.style.display = 'block';
  }
}, 10);

// eslint-disable-next-line no-undef
document.addEventListener('keydown', jump);
// eslint-disable-next-line no-undef
document.addEventListener('touchstart', jump);
iniciarButton.addEventListener('click', iniciar);
reiniciarButton.addEventListener('click', reiniciar);
