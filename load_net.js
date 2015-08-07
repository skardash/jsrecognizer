﻿var network_loaded = false;
classes_txt = ['just circle', 'circle and eyes', 'circle and mouth', 'арийский колобок', 'колобок-инвалид'];
function load_network(path) {
	var request = new XMLHttpRequest();
	//request.open('GET', 'http://mrtgo.com/numbers.txt', true);
	request.open('GET', path, true);
	request.onreadystatechange = function() {
		// Makes sure the document is ready to parse.
		if(request.readyState == 4) {
			// Makes sure it's found the file.
			if(request.status == 200) {
				network_saved = request.responseText;
				network_loaded = true;
				//alert(data);
				//alert(data);
				//show_array(data);
				//$("textarea#ExampleMessage").val(data);
				//img_shaped = reshape(data[1],24,24);
				//alert('data reshaped');
				//to_canvas('mycanv', img_shaped);
				//alert(data[0].length);
				//show_canvas_content('mycanv');
			}
		}
	};
	request.send(null);
}


var put_network = function() {
	if (!network_loaded) 
		return;
	network_saved = network_saved.replace(/\\/g, '');
	var json = JSON.parse(network_saved);
	net = new convnetjs.Net();
	net.fromJSON(json);
	network_prepared = true;
	clearInterval(net_inter);
	//recognize image through time
	//setInterval(classify, 500) ;
	$('#status_check').html('classifier successfully loaded');
	/*
	document.getElementById("dumpjson").value = network_saved;
	network_loaded = false;
	clearInterval(net_inter);
	*/
}

var load_from_server = function() {
	load_network('http://mrtgo.com/jscode/dirtmp/net_new.txt');
	net_inter = setInterval(put_network,100);
}

function load_classifier(path) {
	network_loaded = false;
	network_prepared = false;
	load_network(path);
	net_inter = setInterval(put_network,100);
}