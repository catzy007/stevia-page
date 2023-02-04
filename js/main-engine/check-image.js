function setElmtThumbnail(elmtID, url, type){
    var thumbnail = document.createElement('img');
    thumbnail.onload = function() {
        document.getElementById(elmtID).src = url;
        if(type === "mobile"){
            document.getElementById(elmtID+"M").src = url;
        }
    }
    thumbnail.onerror = function() {
        console.log("#![THUMBNAIL] Could not load thumbnail for " + elmtID);
    }
    thumbnail.src = url;
}