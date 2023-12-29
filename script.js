let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0; 
const resultImageElement = document.getElementById('result-image');

// Fonction appelée  pour lancer les dés lorsqu'un joueur clique sur "Roll Dice"

function rollDice() {
    if (scores[activePlayer] < 100) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        resultImageElement.src = `images/dice-${diceValue}.png`;
        resultImageElement.style.left = '50%';
        resultImageElement.style.top = '50%';
        resultImageElement.style.transform = 'translate(-50%, -50%)';
        const roundScoreElement = document.getElementById(`score${activePlayer + 1}`);

        if (diceValue !== 1) {
            roundScore += diceValue;
            roundScoreElement.textContent = roundScore;
        } else {
            roundScore = 0;
            roundScoreElement.textContent = roundScore;
            switchPlayer();
        }
    }
}


// Fonction appelée pour retenir la somme des lancés lorsque le joueur clique sur "Hold"

function hold() {
    scores[activePlayer] += roundScore;
    document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];
    document.getElementById(`totalScore${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.getElementById(`player${activePlayer + 1}`).classList.add('winner');
        document.getElementById(`player${activePlayer === 0 ? 2 : 1}`).classList.remove('active');
        document.getElementById('rollBtn').disabled = true;
        document.getElementById('holdBtn').disabled = true;
        document.getElementById(`gagnant${activePlayer + 1}`).classList.add('visible');
    } else {
        roundScore = 0;
        document.getElementById(`score${activePlayer + 1}`).textContent = roundScore;
        switchPlayer();
    }
}

// Fonction de bascule entre Player 1 et Player 2

function switchPlayer() {
    activePlayer = 1 - activePlayer;
    document.getElementById(`player1`).classList.toggle('active');
    document.getElementById(`player2`).classList.toggle('active');
}

document.getElementById('rollBtn').addEventListener('click', rollDice);
document.getElementById('holdBtn').addEventListener('click', hold);

function hold() {
    scores[activePlayer] += roundScore;
    const scoreElement = document.getElementById(`score${activePlayer + 1}`);
    const totalScoreElement = document.getElementById(`totalScore${activePlayer + 1}`);
    scoreElement.textContent = scores[activePlayer];
    totalScoreElement.textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.getElementById(`player${activePlayer + 1}`).classList.add('winner');
        document.getElementById(`player${activePlayer === 0 ? 2 : 1}`).classList.remove('active');
        document.getElementById('rollBtn').disabled = true;
        document.getElementById('holdBtn').disabled = true;
        document.getElementById(`gagnant${activePlayer + 1}`).classList.replace('visible');

    } else {
        roundScore = 0;
        document.getElementById(`score${activePlayer + 1}`).textContent = roundScore;
        switchPlayer();
    }
}

// rafraichire la page lorsque le joueur clique sur "New Game"

NewGame = document.getElementById('NewGame');

NewGame.addEventListener('click',function() {
    location.reload();
});

// postion du dé 

function calculateNewPosition() {
    const left = Math.random() * (window.innerWidth - resultImageElement.width);
    const top = Math.random() * (window.innerHeight - resultImageElement.height);
    return { left: left, top: top };
}


