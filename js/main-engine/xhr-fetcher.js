function executeXhr(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.callback = callback;
	xhr.arguments = Array.prototype.slice.call(arguments, 2);
	xhr.onload = xhrSuccess;
    xhr.onerror = xhrError;
    xhr.onabort = xhrError;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Accept", "text/markdown");
	xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.HEADERS_RECEIVED) {
            const contentType = xhr.getResponseHeader("Content-Type");
            if (contentType !== null && !contentType.includes("text/markdown")) {
                xhr.status = 404;
                xhr.abort();
            }
        }
    };
}

function xhrSuccess() { 
	if (this.status !== 200) {
		xhrError(this.arguments[0], this.statusText);
		return;
	}
	console.log("#![" + this.arguments[0] + "] XMLHttpRequest Success!");
	this.callback.apply(this, this.arguments); 
}

function xhrError(type, status) { 
    console.log("#![" + (this.arguments || type) + "] XMLHttpRequest Error! " + (this.statusText || status || 'Not Found'));
 
    var errorPage = "";
    errorPage = errorPage.concat("<table align='center' class='stevia-error-page'>");
    errorPage = errorPage.concat("<tbody>")
    errorPage = errorPage.concat("<tr>")
    errorPage = errorPage.concat("<td class='align-middle'>")
    errorPage = errorPage.concat("<h1 style='font-size:7.0rem;'>404</h1>");
    errorPage = errorPage.concat("<h1>Something's wrong here...</h1>");
    errorPage = errorPage.concat("<h3 class='text-body-secondary lead'>Sorry the ")
    errorPage = errorPage.concat((this.arguments || type))
    errorPage = errorPage.concat(" you're looking could not be found.<br>");
    errorPage = errorPage.concat("Check out our content below or head back to")
    errorPage = errorPage.concat("<a class='lead' href='./'> Homepage</a>.</h3>");
    errorPage = errorPage.concat("</td>");
    errorPage = errorPage.concat("</tr>")
    errorPage = errorPage.concat("</tbody>")
    showMarkdown((this.arguments || type), errorPage);
}