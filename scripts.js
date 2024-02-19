const result = document.querySelector('.result')
const myScore = document.querySelector('#human-score')
const scoreAsh = document.querySelector('#ash-score')

const specialScreen = document.getElementById('special-screen');
const specialMessage = document.getElementById('special-message');
const paperRain = document.getElementById('paper-rain');

const initialScreen = document.getElementById('initial-screen')
initialScreen.classList.add('active');
initialScreen.addEventListener('click', () => {
  initialScreen.classList.remove('active');
});


let humanScoreNumber = 0
let ashScoreNumber = 0


const playHuman = (humamChoice) => {
  playTheGame(humamChoice, playAsh())
}

const playAsh = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

const playTheGame = (human, ash) => {
  if (human == ash) {
    result.innerHTML = 'Deu empate!'

  } else if (human == 'paper' && ash == 'rock' ||
    human == 'rock' && ash == 'scissors' ||
    human == 'scissors' && ash == 'paper') {

    humanScoreNumber += 1
    myScore.innerHTML = humanScoreNumber
    result.innerHTML = 'Você ganhou!'

  } else {
    ashScoreNumber += 1
    scoreAsh.innerHTML = ashScoreNumber
    result.innerHTML = 'Ash ganhou!'
  }

  if (humanScoreNumber == 10) {
    victoryScreen()
  } else if (ashScoreNumber == 10) {
    GameOverScreen()
  }
}

const victoryScreen = () => {
  specialMessage.innerHTML = 'PARABÉNS! <br>VOCÊ VENCEU O JOGO!';
  specialMessage.style.textAlign = 'center'
  specialMessage.style.color = 'white'
  specialScreen.style.backgroundColor = 'rgba(0, 255, 0, 0.9)';
  specialScreen.classList.add('active');
  createPaper();

  specialScreen.addEventListener('click', () => {
    const confirmRestart = confirm('Deseja reiniciar o jogo?');
    if (confirmRestart) {
      resetGame();
    }
  });
}

const GameOverScreen = () => {
  specialMessage.textContent = 'GAME OVER!';
  specialMessage.style.color = 'red'
  specialMessage.style.letterSpacing = '10px'
  specialScreen.style.backgroundColor = 'rgba(128, 128, 128, 0.9)';
  specialScreen.classList.add('active');
  specialScreen.classList.add('game-over-effect');


  specialScreen.addEventListener('click', () => {
    const confirmRestart = confirm('Deseja reiniciar o jogo?');
    if (confirmRestart) {
      resetGame();
    }
  })
}

const createPaper = () => {
  for (let i = 0; i < 80; i++) {
    const paper = document.createElement('div');
    paper.classList.add('paper');
    paper.style.left = `${Math.random() * window.innerWidth}px`;
    paper.style.animationDuration = `${Math.random() * 2 + 1}s`;
    paperRain.appendChild(paper);
  }
}

const resetGame = () => {
  humanScoreNumber = 0;
  ashScoreNumber = 0;
  myScore.innerHTML = 0;
  scoreAsh.innerHTML = 0;
  result.style.backgroundColor = 'transparent';
  result.style.color = 'black';
  result.innerHTML = '';
  specialScreen.classList.remove('active');
  while (paperRain.firstChild) {
    paperRain.removeChild(paperRain.firstChild);
  }
}