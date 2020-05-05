function getSearchRequest(){
    var index="## Search Result\n";
    var sKeyword = this.arguments[2].toLowerCase();
    var text = this.responseText;
	var arrPure = getArrPure(text);
    var arrindex = getArrFilter(text);
    var sResult = "";
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
    console.log(getFilteredKeyword("a!@da s4#$ ^sgds&*( 7`HDGA/\ jdsahd a&n bsp"));
    showMarkdown("PAGE", ["#!", "#!", index+sResult]);
}

function getFilteredKeyword(input){
    return input.replace(/[^\w\s]/gi, '').split(' ').join('-');
}