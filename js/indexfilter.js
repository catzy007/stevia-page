function getArrPure(text){
//filter text from space
    text = text.split(' ').join('');
//store original data
    var arrPure = text.split("\n");
    arrPure.reverse(); 
//filter array (remove empty value)
    arrPure = arrPure.filter(function(el) { return el; });
//return
    return arrPure;
}

function getArrFilter(text){
//filter text from space
    text = text.split(' ').join('');
//store processed data
    text = text.toLowerCase();
    var arrFilter = text.split("\n");
    arrFilter.reverse(); 
//filter array (remove empty value)
    arrFilter = arrFilter.filter(function(el) { return el; });
//filter array (remove seperator)
    for(var i=0; i<arrFilter.length; i++){
        if(arrFilter[i].length == "1" && arrFilter[i] == "-"){
            arrFilter.splice(i,1);
        }
    }
//return
    return arrFilter;
}

function getUrlRequest(url){
    var hash = url.replace("#", "");
	hash = hash.replace("!","");
    hash = hash.toLowerCase();
    return hash;
}