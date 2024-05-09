const calculateBtn = document.getElementById('calculate');
const loveScore = document.getElementById('loveScore');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

const emojis = ['😍', '😘', '❤️', '🥰', '😊', '😉'];
const quotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "Where there is love there is life.",
    "The best thing to hold onto in life is each other.",
    "Love doesn't make the world go round, love is what makes the ride worthwhile.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
];

function calculateLoveScore() {
    const score = Math.floor(Math.random() * 101); 
    scoreDisplay.textContent = `${score}%`;

    if (score >= 80) {
        message.textContent = `Wow! You're meant to be! ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    } else if (score >= 60) {
        message.textContent = `Great match! Keep the love alive. ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    } else if (score >= 40) {
        message.textContent = `Not bad! There's potential. ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    } else {
        message.textContent = `Hmm... Could be better. Don't give up! ${emojis[Math.floor(Math.random() * emojis.length)]}`;
    }
}

calculateBtn.addEventListener('click', calculateLoveScore);
