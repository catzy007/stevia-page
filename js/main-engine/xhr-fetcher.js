function executeXhr(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
	xhr.arguments = Array.prototype.slice.call(arguments, 2);
	xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
	xhr.send(null);
}

function xhrSuccess() { 
	if (this.status !== 200) {
		xhrError(this.arguments[0], this.statusText);
		return;
	}
	//console.log(this.arguments);
	console.log("#![" + this.arguments[0] + "] XMLHttpRequest Success!");
	this.callback.apply(this, this.arguments); 
}

function xhrError(type, status) { 
	// console.log(type + " " + this.arguments);
	console.log("#![" + (this.arguments || type) + "] XMLHttpRequest Error! " + (this.statusText || status));
	showError((this.arguments || type), (this.statusText || status));
}

function showError(type, status){
	var pagelog = "<br><br><br><br><br><br><br>\
		<div align=\"center\">\
			<h3 class=\"not-found-nmbr\">404 "+ (this.arguments || type) +" Not Found!</h3>\n\
			<p>Sorry the "+ (this.arguments || type) +" you're looking could not be found.</p>\
			<p>["+ (this.arguments || type) +"] XMLHttpRequest Error! \
			Click <a href='./'>here</a> to come back</p>\
		</div>\
		<br><br><br><br><br><br><br><br><br>";
	document.getElementById('main-content').innerHTML = pagelog;
}