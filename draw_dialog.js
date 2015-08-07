/*
	module draws dialog boxes, version 3 draws also text inside
*/

function draw_dialog(canvas_id, startx, starty, height, width, shift_down, shift_left, dsh) {
	var c=document.getElementById(canvas_id);
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(startx,starty);
	ctx.lineTo(startx + width, starty);
	ctx.lineTo(startx + width, starty + height);
	ctx.lineTo(startx + width/2 + dsh, starty + height);
	ctx.lineTo(startx + width/2 - shift_left, starty + height + shift_down);
	ctx.lineTo(startx + width/2 - dsh, starty + height);
	ctx.lineTo(startx, starty + height);
	ctx.lineTo(startx,starty);
	ctx.stroke();
}

function draw_dialog2(canvas_id, startx, starty, height, width, mouthx, mouthy, dsh, txt) {
	var c=document.getElementById(canvas_id);
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(startx,starty);
	ctx.lineTo(startx + width, starty);
	ctx.lineTo(startx + width, starty + height);
	ctx.lineTo(startx + width/2 + dsh, starty + height);
	ctx.lineTo(mouthx, mouthy);
	ctx.lineTo(startx + width/2 - dsh, starty + height);
	ctx.lineTo(startx, starty + height);
	ctx.lineTo(startx,starty);
	ctx.stroke();
	//ctx.font="20px Georgia";
	var font_size = 15;
	ctx.font = String(font_size) + "px Georgia";
	var text_height = font_size * 1.5;
	var text_width = ctx.measureText(txt).width;
	var text_x = (width - text_width)/2 + startx;
	var text_y = (height - text_height)/2 + starty;
	context.textBaseline = "top";
	ctx.fillText(txt, text_x, text_y);
}

function draw_dialog3(canvas_id, startx, starty, mouthx, mouthy, dsh, txt) {
	// draw dialog and text
	var c = document.getElementById(canvas_id);
	var ctx = c.getContext("2d");
	ctx.lineWidth = 1;
	ctx.save();
	var font_size = 25;
	ctx.font = String(font_size) + "px Georgia";
	var text_height = font_size * 1.5;
	var text_width = ctx.measureText(txt).width;
	var width = text_width*1.1;
	var height = text_height*1.2;
	
	var text_x = (width - text_width)/2 + startx;
	var text_y = (height - text_height)/2 + starty;
	ctx.textBaseline = "top";	
	ctx.fillText(txt, text_x, text_y);
	
	ctx.beginPath();
	ctx.moveTo(startx,starty);
	ctx.lineTo(startx + width, starty);
	ctx.lineTo(startx + width, starty + height);
	ctx.lineTo(startx + width/2 + dsh, starty + height);
	ctx.lineTo(mouthx, mouthy);
	ctx.lineTo(startx + width/2 - dsh, starty + height);
	ctx.lineTo(startx, starty + height);
	ctx.lineTo(startx, starty);
	ctx.stroke();
	ctx.restore();
} 

function put_bottom_text(canvas_id, txt) {
	var c = document.getElementById(canvas_id);
	var ctx = c.getContext("2d");
	ctx.lineWidth = 1;
	ctx.save();
	var font_size = 20;
	ctx.font = String(font_size) + "px Georgia";
	ctx.textBaseline = "top";	
	var text_width = ctx.measureText(txt).width;
	x_coord = (c.width - text_width)/2;
	ctx.fillText(txt, x_coord, 360);
	ctx.restore();
}

function draw_dialog4(canvas_id, startx, starty, dsh, txt) {
	// draw dialog and text
	var c = document.getElementById(canvas_id);
	var ctx = c.getContext("2d");
	ctx.lineWidth = 1;
	ctx.save();
	var font_size = 25;
	ctx.font = String(font_size) + "px Georgia";
	var text_height = font_size * 1.5;
	var text_width = ctx.measureText(txt).width;
	var width = text_width*1.1;
	var height = text_height*1.2;
	
	var text_x = (width - text_width)/2 + startx;
	var text_y = (height - text_height)/2 + starty;
	ctx.textBaseline = "top";	
	ctx.fillText(txt, text_x, text_y);
	
	ctx.beginPath();
	ctx.moveTo(startx,starty);
	ctx.lineTo(startx + width, starty);
	ctx.lineTo(startx + width, starty + height);
	ctx.lineTo(startx + width/2 + dsh, starty + height);
	var mouthx = startx + width/2 - dsh;
	var mouthy = starty + height + 10;
	ctx.lineTo(mouthx, mouthy);
	ctx.lineTo(startx + width/2 - dsh, starty + height);
	ctx.lineTo(startx, starty + height);
	ctx.lineTo(startx, starty);
	ctx.stroke();
	ctx.restore();
} 