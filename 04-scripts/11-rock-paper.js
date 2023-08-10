
let scores = JSON.parse(localStorage.getItem('score')) || {
	Losses: 0,
	Ties: 0,
	Wins: 0,

};

//updateScoreElem();

//////////////////COMPUTER MOVES///////////////////////////

function pickComputerMove() {
	const random = Math.random();

	let computerMove = "";

	if (random >= 0 && random < 1 / 3) {
		computerMove = "rock";
	} else if (random >= 1 / 3 && random < 2 / 3) {
		computerMove = "paper";
	} else if (random >= 2 / 3 && random < 1) {
		computerMove = "scissors";
	}

	return computerMove;
};

///////////////////////PLAYER MOVES///////////////////

function playGame(playerMove) {

	let computerMove = pickComputerMove();
	let result = "";

	if (playerMove === "scissors") {
		if (computerMove === "rock") {
			result = "You lose";
		} else if (computerMove === "paper") {
			result = "You win";
		} else if (computerMove === "scissors") {
			result = "Tie";
		}
	} else if (playerMove === "paper") {
		if (computerMove === "rock") {
			result = "You win";
		} else if (computerMove === "paper") {
			result = "Tie";
		} else if (computerMove === "scissors") {
			result = "You lose";
		}
	} else if (playerMove === "rock") {
		if (computerMove === "rock") {
			result = "Tie";
		} else if (computerMove === "paper") {
			result = "You lose";
		} else if (computerMove === "scissors") {
			result = "You win";
		}
	};

	//////////////////////////SCORES//////////////////////////

	if (result === 'You win') {
		scores.Wins += 1
	} else if (result === 'You lose') {
		scores.Losses += 1;
	} else if (result === 'Tie') {
		scores.Ties += 1;
	}

	localStorage.setItem('score', JSON.stringify(scores));

	updateScoreElem();

	document.querySelector('.js-result').innerHTML = result;

	document.querySelector('.js-moves').innerHTML = `You <img src="../06-image/${playerMove}-emoji.png"> <img src="../06-image/${computerMove}-emoji.png" > Computer`


};

function updateScoreElem() {
	document.querySelector('.js-score')
		.innerHTML = `Wins: ${scores.Wins}, Losses: ${scores.Losses} , Ties: ${scores.Ties}`

};

function resetScores() {
	scores.Losses = 0;
	scores.Ties = 0;
	scores.Wins = 0;
	localStorage.removeItem('score');
	updateScoreElem();
	clearInterval(intervalId);
};


let isAutoPlaying = false;
let intervalId;

document.querySelector(".js-autoplay-btn").addEventListener("click", () => {

	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			let playerMove = pickComputerMove();
			playGame(playerMove)
		}, 800);
		isAutoPlaying = true;
		document.querySelector(".js-autoplay-btn").innerHTML = "Stop autoplay";

	} else if (isAutoPlaying) {
		clearInterval(intervalId);
		isAutoPlaying = false;
		document.querySelector(".js-autoplay-btn").innerHTML = "Auto play";
	}

});


