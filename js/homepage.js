function getHomepageIndexArray(){
    var limit = 8;
    var index="";
    var text = this.responseText;
	var arrPure = getArrPure(text);
    var arrindex = getArrFilter(text);
    (arrPure.length>8) ? (limit=8) : (limit=arrPure.length);
    for(var i=0; i<limit; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
        }
        index+=  "<div class=\"col-sm-3\">"+
                    "<div class=\"card\"" +
                    "onclick=\"location.href='./loader.html#!" + arrindex[i] +"'\">" +
                        "<div class=\"card-image\" "+
                        "style=\"background-image: url('" +
                            "./assets/img-latest/img"+(i+1)+".jpg" +
                        "');\">" +
                        "</div>" +
                        "<div class=\"card-content\">" +
                            "<p class=\"card-title\">" +
                            getSlicedTitle(getCleanedTitle(arrPure[i])) +
                            "</p>" +
                        "</div>" +
                    "</div>" +
                "</div>\n";
        //console.log(i + " " + arrindex[i] + " " + arrPure[i]);
    }
    index+= "<div style=\"padding-top:2em\" class=\"col-sm-12 text-center\">" +
            "<a style=\"font-size:medium;\" href=\"./loader.html#!index\">Show More Like this \></a></div>";
    document.getElementById(this.arguments[1]).innerHTML = index;
    //showHomepageMarkdown("PAGE", ["#!", "#!", index], this.arguments[1]);
}

function getHomepageCustomArray(){
    var limit = 8;
    var index="";
    var text = this.responseText;
	var arrPure = getArrPure(text);
    var arrindex = getArrFilter(text);
    (arrPure.length>8) ? (limit=8) : (limit=arrPure.length);
    for(var i=0; i<limit; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
        }
        index+=  "<div class=\"col-sm-3\">"+
                    "<div class=\"card\"" +
                    "onclick=\"location.href='./loader.html#!" + arrindex[i] +"'\">" +
                        "<div class=\"card-image\" "+
                        "style=\"background-image: url('" +
                            "./assets/img-category/img"+(i+1)+".jpg" +
                        "');\">" +
                        "</div>" +
                        "<div class=\"card-content\">" +
                            "<p class=\"card-title\">" +
                            getSlicedTitle(getCleanedTitle(arrPure[i])) +
                            "</p>" +
                        "</div>" +
                    "</div>" +
                "</div>\n";
        //console.log(i + " " + arrindex[i] + " " + arrPure[i]);
    }
    index+= "<div style=\"padding-top:2em\" class=\"col-sm-12 text-center\">" +
            "<a style=\"font-size:medium;\" href=\"./loader.html#!subcategory-technology\">Show More Like this \></a></div>";
    document.getElementById(this.arguments[1]).innerHTML = index;
    //showHomepageMarkdown("PAGE", ["#!", "#!", index], this.arguments[1]);
}

function getHomepageCategoryArray(){
    var category = "";
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrCategory = getArrFilter(text);
    for(var i=0; i<arrCategory.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
        }
        category+= "<p class=\"text-index-subcategory\"" +
                    "onclick=\"location.href='./loader.html#!subcategory-" + 
                    arrCategory[i] +"'\">" + 
                    arrPure[i] + "</p>\n";
        //console.log(i + " " + arrCategory[i] + " " + arrPure[i]);
    }
    showHomepageMarkdown("PAGE", ["#!", "#!", category], this.arguments[1]);
}

function setHomepageMenu(){
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrPages = getArrFilter(text);
	var pages="";
	for(var i=0; i<arrPages.length; i++){
		if(i>0){
			pages+= "<a class=\"text-pages-seperator\">_</a>";
		}
		if(arrPages[i] == "home"){
			pages+= "<a class=\"text-pages\" onclick=\"location.href='./'\">Home</a>";
		}else{
            pages+= "<a class=\"text-pages\" " +
                    "onclick=\"location.href='./loader.html#!" + arrPages[i] + "'\">" 
                    + arrPure[i].split('-').join(' ') +"</a>";
		}
		//console.log(i + " " + arrPages[i] + " " + arrPure[i]);
	}
	document.getElementById('Pages').innerHTML = pages;
}

function showHomepageMarkdown(type, postInfo, target){
    var markdown = (this.responseText || postInfo[2]);
    // console.log(postInfo);
    var converter = new showdown.Converter();
    var html = converter.makeHtml(markdown);
    document.getElementById(target).innerHTML = html;
}

function setHomepageFeaturedPost(){
    var pages = "";
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrPost = getArrFilter(text);
    pages += "<div id=\"featured-post-container\" " +
            "onclick=\"location.href='./loader.html#!" + arrPost[0] + "'\"" +
            "style=\"background-image: url('" +
            "./assets/featured.jpg" +
            "');\" class=\"col-sm-8 featured-post\">" +
                "<div class=\"featured-post-title\"><h3>" +
                    getSlicedTitle(getCleanedTitle(arrPure[0])) +
                "</h3></div>" +
                "<div class=\"featured-post-info\"><p>" +
                    getTitleDate(arrPost[0]) +
                "</p></div>" +
            "</div>";
    document.getElementById('featured-post').innerHTML = pages;
}