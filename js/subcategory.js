function getSubcategoryArray(){
    var text = this.responseText;
    var category = "## Category\n";
    var Subcategory = this.arguments[2];
    Subcategory = Subcategory[0].toUpperCase()+Subcategory.slice(1); 
    category += "### "+Subcategory+"\n";
	var arrPure = getArrPure(text);
    var arrSubcategory = getArrFilter(text);
    setBlogIdentifier("", "", Subcategory, "");
    for(var i=0; i<arrSubcategory.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            Subcategory+= "<br>\n";
        }
        category+= "<a class=\"text-index-subcategory\"" +
                    "onclick=\"location.href='#!" +
                    arrSubcategory[i] +"';refreshed()\">" +
                    getParsedTitle(arrPure[i]) +"</a>\n<br>\n";
        //console.log(i + " " + arrSubcategory[i] + " " + arrPure[i]);
    }
    showMarkdown("PAGE", ["#!", "#!", category]);
}