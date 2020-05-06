function getSearchRequest(){
    var index="## Search\n" 
    index += "<input id=\"iptSearch\" type=\"text\" style=\"width:79%;\" placeholder=\"Type Keyword..\">\n";
    index += "<button type=\"submit\" style=\"width:20%\" onclick=\"startSearch();\">Search</button>\n";
    index += "### Search Result\n";
    var sKeyword = this.arguments[2].toLowerCase().split('-').join(' ').replace(/[^\w\s]/gi, '');
    var text = this.responseText;
	var arrPure = getArrPure(text);
    var arrindex = getArrFilter(text);
    var sResult = "";
    // console.log(sKeyword);
    for(var i=0; i<arrindex.length; i++){
        if(getParsedTitle(arrPure[i]).toLowerCase().includes(sKeyword)){
            sResult+= "<a class=\"text-index-subcategory\"" +
                    "onclick=\"location.href='#!" + 
                    arrindex[i] +"';refreshed()\">" + 
                    getParsedTitle(arrPure[i]) + "</a>\n<br>";
        }
        //console.log(i + " " + arrindex[i] + " " + arrPure[i]);
    }
    if(!sResult){
        sResult = "<p>No Posts Found!</p><p>Make sure you type the right keyword and try again.</p>"
    }
    showMarkdown("PAGE", ["#!", "#!", index+sResult]);
}

function startSearch(){
    var keyword = getFilteredKeyword(document.getElementById("iptSearch").value);
    if(keyword){
        location.href = "./loader.html#!search-" + keyword;
    }
}

function getFilteredKeyword(input){
    return input.replace(/[^\w\s]/gi, '').split(' ').join('-');
}