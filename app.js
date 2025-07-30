const quotes = ["Speed is the essence of war.", "Practice makes perfect.", "Typing is fun when you go fast.", "JavaScript is a powerful language.", "Frontend development is creative.", "The quick brown fox jumps over the lazy dog.", "Stay focused and type fast.", "Every second counts in this game.", "Tailwind CSS makes styling easy."];

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");

let currentQuote = "";
let score = 0;
let timeLeft = 30;
let interval;

function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

function startGame() {
	currentQuote = getRandomQuote();
	quoteElement.textContent = currentQuote;
	inputElement.value = "";
	inputElement.disabled = false;
	inputElement.focus();
	timeLeft = 30;
	score = 0;
	updateUI();

	clearInterval(interval);
	interval = setInterval(() => {
		timeLeft--;
		updateUI();

		if (timeLeft <= 0) {
			clearInterval(interval);
			inputElement.disabled = true;
			quoteElement.textContent = "⌛ Time's up!";
		}
	}, 1000);
}

function updateUI() {
	timerElement.textContent = `⏱ ${timeLeft}s`;
	scoreElement.textContent = `✅ Score: ${score}`;
}

inputElement.addEventListener("input", () => {
	if (inputElement.value.trim() === currentQuote) {
		score++;
		currentQuote = getRandomQuote();
		quoteElement.textContent = currentQuote;
		inputElement.value = "";
	}
});

function resetGame() {
	startGame();
}

window.onload = startGame;
