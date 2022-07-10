const CUBICLE_SIDE=40;
$(document).ready(() => {
	let canvas=document.getElementById('myCanvas');
	let ctx = canvas.getContext('2d');
	let color='none'; //color
	makeEmptyGrid(ctx);
	$('#red').click(()=>{
		color='red';
	});
	$('#blue').click(()=>{
		color='blue';
	});
	$('#green').click(()=>{
		color='green';
	});
	$('#orange').click(()=>{
		color='orange';
	});
	$('#yellow').click(()=>{
		color='yellow';
	});
	$('#white').click(()=>{
		color='white';
	});
	canvas.addEventListener('mousedown',(e)=>{
		let point = getCursorCoords(canvas, e);
		let x=point[0];
		let y=point[1];
		
		//if condition for checking of clicking inside grid pending
		if(color!='none')
			makeRect(ctx, x, y, true, color);
	})
})

function getCursorCoords(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
	x = (x - (x % CUBICLE_SIDE)) / CUBICLE_SIDE;
	y = (y - (y % CUBICLE_SIDE)) / CUBICLE_SIDE;
	return [x, y];
}

function makeRect(ctx, x, y, isFilled, color){
	if(isFilled){
		ctx.fillStyle=color;
		ctx.fillRect(x*CUBICLE_SIDE+1, y*CUBICLE_SIDE+1, CUBICLE_SIDE-2, CUBICLE_SIDE-2);
	}else{
		//todo
	}
}

function makeEmptyGrid(ctx){
	ctx.strokeStyle='#0000001';
	ctx.lineWidth = 2;
	ctx.strokeRect(3*CUBICLE_SIDE,0*CUBICLE_SIDE,3*CUBICLE_SIDE, 9*CUBICLE_SIDE);
	ctx.strokeRect(0*CUBICLE_SIDE, 3*CUBICLE_SIDE ,12*CUBICLE_SIDE, 3*CUBICLE_SIDE);//hor rect
	ctx.moveTo(9*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(9*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.stroke();
	ctx.lineWidth = 1;
	ctx.moveTo(1*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(1*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.moveTo(2*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(2*CUBICLE_SIDE, 6*CUBICLE_SIDE);

	ctx.moveTo(7*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(7*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.moveTo(8*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(8*CUBICLE_SIDE, 6*CUBICLE_SIDE);

	ctx.moveTo(10*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(10*CUBICLE_SIDE, 6*CUBICLE_SIDE);
	ctx.moveTo(11*CUBICLE_SIDE, 3*CUBICLE_SIDE);
	ctx.lineTo(11*CUBICLE_SIDE, 6*CUBICLE_SIDE);

	ctx.moveTo(0*CUBICLE_SIDE, 4*CUBICLE_SIDE);
	ctx.lineTo(12*CUBICLE_SIDE, 4*CUBICLE_SIDE);

	ctx.moveTo(0*CUBICLE_SIDE, 5*CUBICLE_SIDE);
	ctx.lineTo(12*CUBICLE_SIDE, 5*CUBICLE_SIDE);

	ctx.moveTo(4*CUBICLE_SIDE, 0*CUBICLE_SIDE);
	ctx.lineTo(4*CUBICLE_SIDE, 9*CUBICLE_SIDE);

	ctx.moveTo(5*CUBICLE_SIDE, 0*CUBICLE_SIDE);
	ctx.lineTo(5*CUBICLE_SIDE, 9*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 1*CUBICLE_SIDE);
	ctx.lineTo(6*CUBICLE_SIDE, 1*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 2*CUBICLE_SIDE);
	ctx.lineTo(6*CUBICLE_SIDE, 2*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 7*CUBICLE_SIDE);
	ctx.lineTo(6*CUBICLE_SIDE, 7*CUBICLE_SIDE);

	ctx.moveTo(3*CUBICLE_SIDE, 8*CUBICLE_SIDE);
	ctx.lineTo(6*CUBICLE_SIDE, 8*CUBICLE_SIDE);

	ctx.stroke();
}