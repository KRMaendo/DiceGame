document.getElementById('darkToggle').addEventListener('click', darkModeToggled);

function darkModeToggled() {
	if (document.getElementById('darkToggle').checked) {
		document.querySelector('.little-ball').classList.add('toggle');
		document.querySelector('body').classList.add('dark');
		document.querySelector('body').classList.remove('light');
		document.querySelector('.up').classList.add('dark-up');
		document.querySelector('.up').classList.remove('light-up');
		console.log('checked bro');
	} else {
		document.querySelector('.little-ball').classList.remove('toggle');
		document.querySelector('body').classList.add('light');
		document.querySelector('body').classList.remove('dark');
		document.querySelector('.up').classList.add('light-up');
		document.querySelector('.up').classList.remove('dark-up');
		console.log('not checked');
	}
}
// document.getElementById('darkToggle').checked('click', function() {
// 	document.querySelector('.little-ball').classList.toggle('toggle');
// 	console.log(document.querySelector('.cover'));
// });
