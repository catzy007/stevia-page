// function checkImgExist(url) {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     // console.log(http.status);
//     if(http.status == 200){
//         return url;
//     }else{
//         return "./assets/nothumb.jpg";
//     }
// }

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