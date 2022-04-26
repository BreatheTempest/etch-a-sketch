const container = document.querySelector('.container');

function createGrid(num) {
	while (num > 0) {
		let square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);
		num--;
	}
}

createGrid(64);

const grid = document.querySelectorAll('.square');

grid.forEach((div) => {
	div.addEventListener('mouseover', () => {
		if (div.classList.value.indexOf('color' === -1)) {
			div.classList.add('color');
		}
	});
});
