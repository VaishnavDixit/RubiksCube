const CUBICLE_SIDE=40;
$(document).ready(() => {
	let ctx = document.getElementById('myCanvas').getContext('2d');
	makeEmptyGrid(ctx);
})

function makeEmptyGrid(ctx){
	ctx.strokeStyle='#0000001';
	ctx.lineWidth = 2;
	ctx.strokeRect(6*CUBICLE_SIDE,3*CUBICLE_SIDE,3*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.strokeRect(3*CUBICLE_SIDE, 6*CUBICLE_SIDE ,12*CUBICLE_SIDE, 3*CUBICLE_SIDE);//hor rect
	ctx.moveTo(12*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(12*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.stroke();
	ctx.lineWidth = 1;
	ctx.moveTo(4*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(4*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.moveTo(5*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(5*CUBICLE_SIDE, 9*CUBICLE_SIDE);

	ctx.moveTo(10*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(10*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.moveTo(11*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(11*CUBICLE_SIDE, 9*CUBICLE_SIDE);

	ctx.moveTo(13*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(13*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.moveTo(14*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.lineTo(14*CUBICLE_SIDE, 9*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 7*CUBICLE_SIDE);
	ctx.lineTo(15*CUBICLE_SIDE, 7*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 8*CUBICLE_SIDE);
	ctx.lineTo(15*CUBICLE_SIDE, 8*CUBICLE_SIDE);

	ctx.moveTo(7*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(7*CUBICLE_SIDE, 12*CUBICLE_SIDE);

	ctx.moveTo(8*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(8*CUBICLE_SIDE, 12*CUBICLE_SIDE);

	ctx.moveTo(6*CUBICLE_SIDE, 4*CUBICLE_SIDE);
	ctx.lineTo(9*CUBICLE_SIDE, 4*CUBICLE_SIDE);

	ctx.moveTo(6*CUBICLE_SIDE, 5*CUBICLE_SIDE);
	ctx.lineTo(9*CUBICLE_SIDE, 5*CUBICLE_SIDE);

	ctx.moveTo(6*CUBICLE_SIDE, 10*CUBICLE_SIDE);
	ctx.lineTo(9*CUBICLE_SIDE, 10*CUBICLE_SIDE);

	ctx.moveTo(6*CUBICLE_SIDE, 11*CUBICLE_SIDE);
	ctx.lineTo(9*CUBICLE_SIDE, 11*CUBICLE_SIDE);

	ctx.stroke();
}