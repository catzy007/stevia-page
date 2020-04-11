function getIndexArray(){
    var index="## Index\n";
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrindex = getArrFilter(text);
    for(var i=0; i<arrindex.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            index+= "<br>";
        }
        index+= "<a class=\"text-index-subcategory\"" +
                "onclick=\"location.href='#!" + 
                arrindex[i] +"';refreshed()\">" + 
                getParsedTitle(arrPure[i]) + "</a>\n<br>";
        //console.log(i + " " + arrindex[i] + " " + arrPure[i]);
    }
    showMarkdown("PAGE", ["#!", "#!", index]);
}