const container = document.querySelector('.container');

const create = document.querySelector('.create');

function createGrid(num) {
	let width = 600 / num;
	num *= num;
	let border = width / 50;
	while (num > 0) {
		let square = document.createElement('div');
		square.style.width = `${width}px`;
		square.style.height = `${width}px`;
		square.style.borderWidth = `${border}px`;
		square.classList.add('square');
		container.appendChild(square);
		num--;
	}
}

createGrid(10);

function removeGrid() {
	grid.forEach((div) => {
		container.removeChild(div);
	});
}

let activeColor = 'black';

let grid = document.querySelectorAll('.square');

const sizeRange = document.querySelector('#range');
sizeRange.addEventListener('change', () => {
	let size = sizeRange.value;
	removeGrid();
	createGrid(size);
	document.querySelector('label p').innerText = `${size} x ${size}`;
	grid = document.querySelectorAll('.square');

	if (activeColor === 'rainbow') rainbow();
	else black();
});

function black() {
	grid.forEach((div) => {
		div.addEventListener(
			'mouseover',
			() => (div.style.backgroundColor = '#111')
		);
	});
}

function rainbow() {
	const colors = [
		'#FF6633',
		'#FFB399',
		'#FF33FF',
		'#FFFF99',
		'#00B3E6',
		'#E6B333',
		'#3366E6',
		'#999966',
		'#99FF99',
		'#B34D4D',
		'#80B300',
		'#809900',
		'#E6B3B3',
		'#6680B3',
		'#66991A',
		'#FF99E6',
		'#CCFF1A',
		'#FF1A66',
		'#E6331A',
		'#33FFCC',
		'#66994D',
		'#B366CC',
		'#4D8000',
		'#B33300',
		'#CC80CC',
		'#66664D',
		'#991AFF',
		'#E666FF',
		'#4DB3FF',
		'#1AB399',
		'#E666B3',
		'#33991A',
		'#CC9999',
		'#B3B31A',
		'#00E680',
		'#4D8066',
		'#809980',
		'#E6FF80',
		'#1AFF33',
		'#999933',
		'#FF3380',
		'#CCCC00',
		'#66E64D',
		'#4D80CC',
		'#9900B3',
		'#E64D66',
		'#4DB380',
		'#FF4D4D',
		'#99E6E6',
		'#6666FF',
	];

	grid.forEach((div) => {
		div.addEventListener('mouseover', () => {
			let color = colors[Math.floor(Math.random() * colors.length)];
			div.style.backgroundColor = color;
		});
	});
}

function eraser() {
	grid.forEach((div) => {
		div.addEventListener(
			'mouseover',
			() => (div.style.backgroundColor = 'white')
		);
	});
}

black();

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.classList.value.indexOf('black') !== -1) {
			activeColor = 'black';
			black();
		}
		if (btn.classList.value.indexOf('rainbow') !== -1) {
			activeColor = 'rainbow';
			rainbow();
		}
		if (btn.classList.value.indexOf('eraser') !== -1) {
			activeColor = 'eraser';
			eraser();
		}

		if (btn.classList.value.indexOf('clear') !== -1) {
			grid.forEach((div) => {
				div.style.backgroundColor = 'white';
			});
		}
	});
});
