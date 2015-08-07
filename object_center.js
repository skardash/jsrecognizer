function canvas_to_array(id) {
	var ctx = document.getElementById(id).getContext("2d");
	var h = ctx.canvas.height;
	var w = ctx.canvas.width;
	var imgData = ctx.getImageData(0, 0, w, h);
	var data = imgData.data;  // the array of RGBA values
	var canvas_array = [];
	//var tmp_cnt = find_nonzeros(data);
	//alert(tmp_cnt);
	for(var i = 0; i < h; i++) {
		for(var j = 0; j < w; j++) {
			canvas_array.push(data[4 * i * w + 4 * j+3]);
		}
	}
	return canvas_array;
}

function find_non_zeros(dt, canvas_id) {
	var ctx = document.getElementById(canvas_id).getContext("2d");
	var h = ctx.canvas.height;
	var w = ctx.canvas.width;
	var arr_nz = [];
	for (var r=0; r<h; r++) {
		for (var c=0; c<w; c++) {
			if (dt[r*w+c] > 0) {
				arr_nz.push([c, r]);
			}
		}
	}
	return arr_nz;
}

function figure_center(fig) {
	var center = new Array(2);
	center[0] = 0;
	center[1] = 0;
	for (var cnt=0; cnt<fig.length; cnt++) {
		center[0] += fig[cnt][0];
		center[1] += fig[cnt][1];
	}
	center[0]/=fig.length;
	center[1]/=fig.length;
	return center;
}

function get_center(canvas_id) {
	var dt = canvas_to_array(canvas_id);
	var nz_elem = find_non_zeros(dt,canvas_id) ;
	cntr = figure_center(nz_elem);
	return cntr;
}