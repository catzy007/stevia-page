function loadPageUnindexed(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, "Unlisted Index", "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./posts/unindexed.md", parseUnlistedIndex, "INDEX", pageRequest);
}

function parseUnlistedIndex(){
    var text = this.responseText;
    var arrUnlisted = parseIndexArray(text);
    var arrUnlistedL = parseIndexLower(text);

    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");
    pageTitle.innerHTML = "Unlisted Index";
    mainContent.appendChild(pageTitle);

    if(arrUnlisted.length > 0){
        for(var i=0; i<arrUnlisted.length; i++){
            mainContent.appendChild(
                IndexWrapper(
                    arrUnlistedL[i],
                    getTitleDate(arrUnlisted[i]),
                    getTitleOnly(arrUnlisted[i])
                )
            );
        }
    }else{
        mainContent.appendChild(emptyIndexWrapper());
    }
}