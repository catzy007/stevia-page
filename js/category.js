function getCategoryArray(){
    var category = "## Category\n";
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrCategory = getArrFilter(text);
    for(var i=0; i<arrCategory.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            category+= "<br>\n";
        }
        category+= "<a class=\"text-category\"" +
                    "onclick=\"location.href='#!subcategory-" + 
                    arrCategory[i] + "';refreshed()\">" +
                    getCleanedTitle(arrPure[i]) + "</a>\n<br>\n";
        //console.log(i + " " + arrCategory[i] + " " + arrPure[i]);
    }
    showMarkdown("PAGE", ["#!", "#!", category]);
}