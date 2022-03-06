function checkImgExist(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    // console.log(http.status);
    if(http.status == 200){
        return url;
    }else{
        return "./assets/nothumb.jpg"
    }
}