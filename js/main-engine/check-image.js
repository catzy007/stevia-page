function setElmtThumbnail(elmtID, url){
    var thumbnail = document.createElement('img');
    thumbnail.onload = function() {
        document.getElementById(elmtID).src = url;
    }
    // thumbnail.onerror = function() {
    //     console.log('Could not load thumbnail for '+elmtID);
    // }
    thumbnail.src = url;
}