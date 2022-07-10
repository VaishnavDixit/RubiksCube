$(document).ready(() => {
	const CUBICLE_SIDE=30;
	let ctx = document.getElementById('myCanvas').getContext('2d');
	ctx.rect(6*CUBICLE_SIDE,3*CUBICLE_SIDE,3*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.rect(3*CUBICLE_SIDE, 6*CUBICLE_SIDE ,12*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.moveTo(12*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	// ctx.rect()
	ctx.lineTo(12*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.moveTo(12*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	// ctx.rect()
	ctx.lineTo(12*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.stroke();
})

// function makeGrid