function loadPageUnindexed(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, "Unlisted Index", "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./posts/unindexed.md", parseUnlistedIndex, "INDEX", pageRequest);
}

function parseUnlistedIndex(){
    var text = this.responseText;
    var pageHTML = "<h4>Unlisted Index</h4>";
    var arrUnlisted = parseIndexArray(text);
    var arrUnlistedL = parseIndexLower(text);
    if(arrUnlisted.length > 0){
        for(var i=0; i<arrUnlisted.length; i++){
            pageHTML = pageHTML.concat("<p>");
            pageHTML = pageHTML.concat("<a href='./loader.html?post="+ arrUnlistedL[i] +"'>");
            pageHTML = pageHTML.concat(getTitleDate(arrUnlisted[i])+" - "+getTitleOnly(arrUnlisted[i]));
            pageHTML = pageHTML.concat("</a>");
            pageHTML = pageHTML.concat("</p>");
        }
    }else{
        pageHTML = pageHTML.concat("<p>Empty</p>");
    }
    document.getElementById("main-content").innerHTML = pageHTML;
}