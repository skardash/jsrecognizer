function en_dr(id1,id2) {
	canvas1 = document.getElementById(id1);
	context1 = canvas1.getContext('2d');
	canvas2 = document.getElementById(id2);
	context2 = canvas2.getContext('2d');

	var draw;
	window.addEventListener('load', function () {
		// Touch Events handlers
		draw1t = {
			started: false,
			start: function(event) {
				if (!left_blocked) {
					context1.beginPath();
					var x = event.targetTouches[0].pageX;
					var y = event.targetTouches[0].pageY;
					var radius = 5;
					context1.beginPath();
					
					context1.arc(x, y, radius, 0, 2 * Math.PI, false);
					context1.fillStyle = '#000000';
					context1.fill();
					
					context1.lineWidth = 0.1;
					context1.strokeStyle = '#000000';
					context1.stroke();
					context1.beginPath();
					context1.moveTo(x, y);
					this.started = true;
				}
//				alert('touchstart!');
			},
			move: function(event) {
				if (!left_blocked) {
					if (this.started) {
						context1.lineTo(
							event.targetTouches[0].pageX,
							event.targetTouches[0].pageY
						);
						context1.lineWidth = 10;
						context1.stroke();
					}
				}
			},
			end: function(event) {
				this.started = false;
				//alert('touchend!');
				classify_kol();
			}
		};
		
		draw2t = {
			started: false,
			start: function(event) {
				if (!right_blocked) {
					context2.beginPath();
					var x = event.targetTouches[0].pageX - canvas2.getBoundingClientRect().left;
					var y = event.targetTouches[0].pageY - canvas2.getBoundingClientRect().top;
					var radius = 5;
					context2.beginPath();
					
					context2.arc(x, y, radius, 0, 2 * Math.PI, false);
					context2.fillStyle = '#000000';
					context2.fill();
					
					context2.lineWidth = 0.1;
					context2.strokeStyle = '#000000';
					context2.stroke();
					context2.beginPath();
					context2.moveTo(x, y);
					this.started = true;
				}
//				alert('touchstart!');
			},
			move: function(event) {
				if (!right_blocked) {
					if (this.started) {
						context2.lineTo(
							(event.targetTouches[0].pageX - canvas2.getBoundingClientRect().left),
							(event.targetTouches[0].pageY - canvas2.getBoundingClientRect().top)
						);
						context2.lineWidth = 10;
						context2.stroke();
					}
				}
			},
			end: function(event) {
				this.started = false;
				//alert('touchend!');
				//classify_kol();
			}
		};
		/*
		draw2t = {
			started: false,
			start: function(event) {	
				//alert('touched!');
				context2.beginPath();
				var x = event.targetTouches[0].pageX;
				var y = event.targetTouches[0].pageY;
				var radius = 13;
				context2.beginPath();
				context2.arc(x, y, radius, 0, 2 * Math.PI, false);
				context2.fillStyle = '#000000';
				context2.fill();
				context2.lineWidth = 0.1;
				context2.strokeStyle = '#000000';
				context2.stroke();
				context2.beginPath();
				context2.moveTo(x, y);
				this.started = true;
//				alert('touchstart!');
			},
			move: function(event) {
				//alert('moved!');
				if (this.started) {
					context2.lineTo(
						event.targetTouches[0].pageX,
						event.targetTouches[0].pageY
					);
					context2.lineWidth = 24;
					context2.stroke();
				}
			},
			end: function(event) {
				//alert('released!');
				this.started = false;
				//alert('touchend!');
				//classify_kol();
			}
		};
		*/
		
		draw1 = {
			started: false,
			start: function(event) {
				context1.beginPath();
				var x = event.targetTouches[0].pageX;
				var y = event.targetTouches[0].pageY;
				//alert('x = ' + String(x) + '/y = ' + String(y));
				var radius = 5;
				context1.beginPath();
				context1.arc(x, y, radius, 0, 2 * Math.PI, false);
				context1.fillStyle = '#000000';
				context1.fill();
				context1.lineWidth = 0.1;
				context1.strokeStyle = '#000000';
				context1.stroke();
				context1.beginPath();
				context1.moveTo(x, y);
				this.started = true;
			},
			
			move: function(event) {
				if (this.started) {
					context.lineTo(
						event.targetTouches[0].pageX,
						event.targetTouches[0].pageY
					);
					context.lineWidth = 24;
					context.stroke();
				}
			},
			
			move_mouse: function(event) {
				if (event.which) {
					if (this.started) {
						context1.lineTo(
							event.pageX - canvas1.getBoundingClientRect().left,
							event.pageY - canvas1.getBoundingClientRect().top
						);
						context1.lineWidth = 10;
						context1.stroke();
					}
				}
			},
			start_mouse: function(event) {
				context1.beginPath();
				var x = event.pageX - canvas1.getBoundingClientRect().left;
				var y = event.pageY - canvas1.getBoundingClientRect().top;
				//alert('x = ' + String(x) + '/y = ' + String(y));
				var radius = 5;
				context1.beginPath();
				context1.arc(x, y, radius, 0, 2 * Math.PI, false);
				context1.fillStyle = '#000000';
				context1.fill();
				context1.lineWidth = 0.1;
				context1.strokeStyle = '#000000';
				context1.stroke();
				
				context1.beginPath();
				context1.moveTo(x, y);
				
				this.started = true;
			},
			move_mouse: function(event) {
				if (event.which) {
					if (this.started) {
						context1.lineTo(
							event.pageX - canvas1.getBoundingClientRect().left,
							event.pageY - canvas1.getBoundingClientRect().top
						);
						context1.lineWidth = 10;
						context1.stroke();
					}
				}
			},
			end: function(event) {
				this.started = false;
				classify_kol();
			}	
		};
		
		draw2 = {
			started: false,
			start_mouse: function(event) {
				if (!right_blocked) {
					context2.beginPath();
					var x = event.pageX - canvas2.getBoundingClientRect().left;
					var y = event.pageY - canvas2.getBoundingClientRect().top;
					//alert('x = ' + String(x) + '/y = ' + String(y));
					var radius = 5;
					context2.beginPath();
					context2.arc(x, y, radius, 0, 2 * Math.PI, false);
					context2.fillStyle = '#000000';
					context2.fill();
					context2.lineWidth = 0.1;
					context2.strokeStyle = '#000000';
					context2.stroke();
					context2.beginPath();
					context2.moveTo(x, y);
					this.started = true;
				}
			},
			move_mouse: function(event) {
				if (!right_blocked) {
					if (event.which) {
						if (this.started) {
							context2.lineTo(
								event.pageX - canvas2.getBoundingClientRect().left,
								event.pageY - canvas2.getBoundingClientRect().top
							);
							context2.lineWidth = 10;
							context2.stroke();
							//change_status('This what happens if you try to recognize while painting');
						}
					}
				}
			},
			end: function(event) {
				this.started = false;
			}	
		};
		// Events

		canvas1.addEventListener("mousedown", draw1.start_mouse, false);
		canvas1.addEventListener("mousemove", draw1.move_mouse, false);
		canvas1.addEventListener("mouseup", draw1.end, false);
		
		canvas1.addEventListener("touchstart", draw1t.start, false);
		canvas1.addEventListener("touchmove", draw1t.move, false);
		canvas1.addEventListener("touchend", draw1t.end, false);
		
		canvas2.addEventListener("mousedown", draw2.start_mouse, false);
		canvas2.addEventListener("mousemove", draw2.move_mouse, false);
		canvas2.addEventListener("mouseup", draw2.end, false);
		
		canvas2.addEventListener("touchstart", draw2t.start, false);
		canvas2.addEventListener("touchmove", draw2t.move, false);
		canvas2.addEventListener("touchend", draw2t.end, false);
	});
		
	//canvas.addEventListener("mousedown", draw.start_mouse, false);
	document.body.addEventListener('touchmove',function(event){
		event.preventDefault();
	},false);
}

function clearImage(){
	canvas.width = canvas.width;
}

