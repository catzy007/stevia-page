//set and get web identifier
var bgIdnt;
var bgUrl;
var bgTitle;
var bgLang;
var tOp = "Stevia Page";
var disqus = "umbrella-test";
var copyright = "Bagus Saputra"

function setBlogIdentifier(pIdnt, pUrl, pTitle, pLang){
	bgIdnt = pIdnt;
	bgUrl = pUrl;
	bgTitle = tOp + " - " + pTitle;
	bgLang = pLang;
}

function getBlogIdentifier(){
	return [bgIdnt, bgUrl, bgTitle, bgLang];
}

function getDisqusShortname(){
	return disqus;
}

function enableComments(){
	return true;
}

function getBlogCopyright(){
	return copyright;
}