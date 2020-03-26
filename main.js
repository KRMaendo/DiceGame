document.getElementById('darkToggle').addEventListener('click', darkModeToggled);

function darkModeToggled() {
	if (document.getElementById('darkToggle').checked) {
		document.querySelector('.little-ball').classList.add('toggle');
		document.querySelector('body').classList.add('dark');
		document.querySelector('body').classList.remove('light');
		for (var i = 0; i < document.querySelectorAll('.up').length; i++) {
			document.querySelectorAll('.up')[i].classList.add('dark-up');
			document.querySelectorAll('.up')[i].classList.remove('light-up');
		}
		for (var i = 0; i < document.querySelectorAll('.down').length; i++) {
			document.querySelectorAll('.down')[i].classList.add('dark-down');
			document.querySelectorAll('.down')[i].classList.remove('light-down');
		}
		console.log('checked bro');
	} else {
		document.querySelector('.little-ball').classList.remove('toggle');
		document.querySelector('body').classList.add('light');
		document.querySelector('body').classList.remove('dark');
		for (var i = 0; i < document.querySelectorAll('.up').length; i++) {
			document.querySelectorAll('.up')[i].classList.add('light-up');
			document.querySelectorAll('.up')[i].classList.remove('dark-up');
		}
		for (var i = 0; i < document.querySelectorAll('.down').length; i++) {
			document.querySelectorAll('.down')[i].classList.add('light-down');
			document.querySelectorAll('.down')[i].classList.remove('dark-down');
		}
		console.log('not checked');
	}
}
// document.getElementById('darkToggle').checked('click', function() {
// 	document.querySelector('.little-ball').classList.toggle('toggle');
// 	console.log(document.querySelector('.cover'));
// });
