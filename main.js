document.getElementById('darkToggle').addEventListener('click', darkModeToggled);
document.getElementById('next').addEventListener('click', startGame);
document.querySelector('.arrow-container').addEventListener('click', hidePage2);
document.querySelector('#roll-dice .btn').addEventListener('click', rollDice);
pg2 = document.querySelector('.pg-2');

var d1 = 1;
var d2 = 2;
var winner, winnerName;
var n1 = '';
var n2 = '';
function darkModeToggled() {
	if (document.getElementById('darkToggle').checked) {
		addDarkMode();
	} else {
		addLightMode();
	}
}

function addDarkMode() {
	document.querySelector('.little-ball').classList.add('toggle');
	document.querySelector('body').classList.add('dark');
	document.querySelector('body').classList.remove('light');
	document.querySelector('.pg-2').classList.add('dark');
	document.querySelector('.pg-2').classList.remove('light');
	document.querySelector('.mode').textContent = 'Light Mode';
	for (var i = 0; i < document.querySelectorAll('.up').length; i++) {
		document.querySelectorAll('.up')[i].classList.add('dark-up');
		document.querySelectorAll('.up')[i].classList.remove('light-up');
	}
	for (var i = 0; i < document.querySelectorAll('.down').length; i++) {
		document.querySelectorAll('.down')[i].classList.add('dark-down');
		document.querySelectorAll('.down')[i].classList.remove('light-down');
	}
}

function addLightMode() {
	document.querySelector('.little-ball').classList.remove('toggle');
	document.querySelector('body').classList.add('light');
	document.querySelector('body').classList.remove('dark');
	document.querySelector('.pg-2').classList.add('light');
	document.querySelector('.pg-2').classList.remove('dark');
	document.querySelector('.mode').textContent = 'Dark Mode';
	for (var i = 0; i < document.querySelectorAll('.up').length; i++) {
		document.querySelectorAll('.up')[i].classList.add('light-up');
		document.querySelectorAll('.up')[i].classList.remove('dark-up');
	}
	for (var i = 0; i < document.querySelectorAll('.down').length; i++) {
		document.querySelectorAll('.down')[i].classList.add('light-down');
		document.querySelectorAll('.down')[i].classList.remove('dark-down');
	}
}

function startGame() {
	displayPage2();
	updatePlayerNames();
}

function displayPage2() {
	pg2.classList.add('display');
	pg2.classList.remove('hide');
	document.querySelector('.pg-1').style.opacity = '0';
	document.querySelector('.arrow-container').classList.add('display-back');
	document.querySelector('.arrow-container').classList.remove('hide-back');
}

function hidePage2() {
	resetGame();
	pg2.classList.add('hide');
	pg2.classList.remove('display');
	document.querySelector('.arrow-container').classList.add('hide-back');
	document.querySelector('.arrow-container').classList.remove('display-back');
	document.querySelector('.pg-1').style.opacity = '1';
	console.log('click');
}

function updatePlayerNames() {
	var name1 = document.getElementById('name1').value;
	var name2 = document.getElementById('name2').value;
	if (name1 !== '') {
		document.querySelector('.name1').textContent = name1;
		n1 = name1;
	} else {
		document.querySelector('.name1').textContent = 'Player1';
		n1 = 'Player1';
	}

	if (name2 !== '') {
		document.querySelector('.name2').textContent = name2;
		n2 = name2;
	} else {
		document.querySelector('.name2').textContent = 'Player2';
		n2 = 'Player2';
	}
}

// Game Logic

function resetGame() {
	document.querySelector('.name1').textConent = 'Player1';
	document.querySelector('.name2').textConent = 'Player2';
	document.getElementById('name1').value = '';
	document.getElementById('name2').value = '';
	if (document.querySelector('.winner')) document.querySelector('.winner').remove();

	d1 = 1;
	d2 = 1;
}

function rollDice() {
	d1 = Math.floor(Math.random() * 6) + 1;
	d2 = Math.floor(Math.random() * 6) + 1;
	displayDice(d1, 1);
	displayDice(d2, 2);
	if (d1 > d2) {
		winner = 1;
		winnerName = n1;
	} else {
		winner = 2;
		winnerName = n2;
	}
	playerWins(winner);
}

function displayDice(num, die) {
	var dice;
	if (die === 1) {
		dice = document.getElementById('dice1');
	} else {
		dice = document.getElementById('dice2');
	}

	switch (num) {
		case 1:
			dice.src = './img/dice/one.png';
			break;
		case 2:
			dice.src = './img/dice/two.png';
			break;
		case 3:
			dice.src = './img/dice/three.png';
			break;
		case 4:
			dice.src = './img/dice/four.png';
			break;
		case 5:
			dice.src = './img/dice/five.png';
			break;
		case 6:
			dice.src = './img/dice/six.png';
			break;
	}
}

function playerWins(num) {
	if (document.querySelector('.winner')) {
		document.querySelector('.winner').remove();
	}
	var html = '<div class="col winner"><h2>' + winnerName + ' Wins!!!</h2></div>';
	document.querySelector('.player1').insertAdjacentHTML('afterend', html);
}

function addWrapper(dimension) {
	if (dimension.matches) {
		// document.body.insertAdjacentHTML('afterbegin', '<div class = "wrapper">');
		document.body.querySelector('script').insertAdjacentHTML('afterend', '</div>');
	}
}

var dimension = window.matchMedia('(max-width: 576px)');
addWrapper(dimension);
dimension.addListener(addWrapper);
