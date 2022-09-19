function loadPageIndex(arrIndex, arrLower, urlRequest, pageRequest){
    var pageHTML = "<h4>Index</h4>";
    // document.getElementById("featuredPostImg").src = checkImgExist("./pages/" + pageRequest + "/thumbnail.jpg");
    setElmtThumbnail(featuredPostImg, "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize("index"), "en-us");
    document.title = getSiteIdentifier()[2];
    for(var i=0; i<arrIndex.length; i++){
        if(arrIndex[i].length > 1){
            pageHTML = pageHTML.concat("<p>");
            pageHTML = pageHTML.concat("<a href='./loader.html?post="+ arrLower[i] +"'>");
            pageHTML = pageHTML.concat(getTitleDate(arrIndex[i])+" - "+getTitleOnly(arrIndex[i]));
            pageHTML = pageHTML.concat("</a>");
            pageHTML = pageHTML.concat("</p>");
        }
    }
    document.getElementById('main-content').innerHTML = pageHTML;
}