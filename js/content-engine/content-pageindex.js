function loadPageIndex(arrIndex, arrLower, urlRequest, pageRequest){
    var pageHTML = "<h4>Index</h4>";
    document.getElementById("featuredPostImg").src = checkImgExist("./pages/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize("index"), "en-us");
    document.title = getSiteIdentifier()[2];
    for(var i=0; i<arrIndex.length; i++){
        pageHTML = pageHTML.concat("<a href='./loader.html?post="+ arrLower[i] +"'>");
        pageHTML = pageHTML.concat("<p>"+getTitleDate(arrIndex[i])+" - "+getTitleOnly(arrIndex[i])+"</p>");
        pageHTML = pageHTML.concat("</a>");
    }
    document.getElementById('main-content').innerHTML = pageHTML;
}