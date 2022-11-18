function getTitleDate(title){
    var titledate = new Date(title.slice(0, 10));
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return titledate.toLocaleDateString("en-US", options);
}

function getCleanedTitle(title){
    return title.split('-').join(' ');
}

function getSlicedTitle(title){
    return title.slice(11);
}

function getTitleOnly(title){
    return getSlicedTitle(getCleanedTitle(title));
}

function capitalize(s){
    return s && s[0].toUpperCase() + s.slice(1);
}

function fetchContentTitle(pageRequest, arrIndex){
    for(var i=0; i<arrIndex.length; i++){
        if(arrIndex[i].toLowerCase().trim() == pageRequest){
            return arrIndex[i];
        }
    }
    return pageRequest.toLowerCase().replace(/\b[a-z](?=[a-z]{1})/g, 
        function(letter){ 
            return letter.toUpperCase();
        }
    );
}