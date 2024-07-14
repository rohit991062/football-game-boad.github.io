let gameInterval;
let seconds = 0;
let minutes = 0;
let half = 'first';

function startFirstHalf() {
    startGame('First Half');
    document.getElementById('second-half-btn').disabled = false;
    document.getElementById('home-goal-btn').disabled = false;
    document.getElementById('guest-goal-btn').disabled = false;
}

function startSecondHalf() {
    clearInterval(gameInterval);
    seconds = 0;
    minutes = 0;
    document.getElementById('minute').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('half').textContent = 'Second Half';
    half = 'second';
    gameInterval = setInterval(updateTimer, 1000);
    document.getElementById('second-half-btn').disabled = true;
}

function startGame(half) {
    clearInterval(gameInterval); // Clear any existing intervals
    seconds = 0;
    minutes = 0;
    document.getElementById('minute').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('half').textContent = half;
    document.getElementById('home-score').querySelector('span').textContent = '00';
    document.getElementById('guest-score').querySelector('span').textContent = '00';
    gameInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    document.getElementById('minute').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function incrementScore(team) {
    const scoreElement = document.getElementById(`${team}-score`).querySelector('span');
    let score = parseInt(scoreElement.textContent);
    score++;
    scoreElement.textContent = String(score).padStart(2, '0');
}
