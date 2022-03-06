//Return array of index.md
function parseIndexArray(index){
    index = index.split(' ').join('');
    var arrIndex = index.split("\n");
    arrIndex.reverse(); 
    arrIndex = arrIndex.filter(function(el) { return el; });
    return arrIndex;
}

//Return array of index.md adjusted to lower case
function parseIndexLower(index){
    var arrLower = parseIndexArray(index);
    for(var i=0; i<arrLower.length; i++){
        arrLower[i] = arrLower[i].toLowerCase();
    }
    return arrLower;
}

function getUrlRequest(){
    var request = window.location;
    request = request.toString().toLowerCase();
    return request;
}