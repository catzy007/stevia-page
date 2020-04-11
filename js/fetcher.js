function xhrSuccess() { 
	if (this.status !== 200) {
		xhrError(this.arguments[0], this.statusText);
		return;
	}
	//console.log(this.arguments);
	var mylog = "#![" + this.arguments[0] + "] XMLHttpRequest Success!";
	console.log(mylog);
	this.callback.apply(this, this.arguments); 
}

function xhrError(type, status) { 
	setBlogIdentifier("/blog/#!", window.location.href, (this.statusText || status), "en");
	var mylog = "#![" + (this.arguments || type) + "] XMLHttpRequest Error! " + (this.statusText || status);
	console.log(mylog);
	var pagelog = "<br><br><br><br><br><br><br>\
		<div align=\"center\">\
			<h1 class=\"not-found-nmbr\">404</h1>\n\
			<h1>"+ (this.arguments || type) +" Not Found!</h1>\n\
			<h3>Sorry the main "+ (this.arguments || type) +" for this website could not be found.</h3>\
			<h4>["+ (this.arguments || type) +"] XMLHttpRequest Error!</h4>\
		</div>";
	showMarkdown((this.arguments || type), ["#!", "#!", pagelog]);
}

function executeXhr(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
	xhr.arguments = Array.prototype.slice.call(arguments, 2);
	xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.open("GET", url, true);
	xhr.send(null);
}