function IndexWrapper(targetUrl, targetDate, targetName){
    var IndexElmtPara = document.createElement("p");
    var IndexElmtAncr = document.createElement("a");
    IndexElmtAncr.innerHTML = targetDate + " - " + targetName;
    IndexElmtAncr.href = "./loader.html?post=" + targetUrl;
    IndexElmtPara.appendChild(IndexElmtAncr);
    return IndexElmtPara;
}

function emptyIndexWrapper(){
    var IndexEmpty = document.createElement("p");
    IndexEmpty.innerHTML = "Empty";
    return IndexEmpty;
}

function loadPageIndex(arrIndex, arrLower, urlRequest, pageRequest){
    if(pageRequest == "unlisted"){
        setSiteIdentifier(pageRequest, urlRequest, capitalize("unlisted index"), "en-us");    
        executeXhr("./posts/unindexed.md", parseUnlistedIndex, "INDEX", pageRequest);
    }else{
    setElmtThumbnail("featuredPostImg", "./posts/thumbnail.jpg", "mobile");
    setSiteIdentifier(pageRequest, urlRequest, capitalize("index"), "en-us");
        parseListedIndex(arrIndex, arrLower);
    }
}

function parseListedIndex(arrIndex, arrLower){
    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");
    pageTitle.innerHTML = "Index";
    mainContent.appendChild(pageTitle);

    if(arrIndex.length > 0){
    for(var i=0; i<arrIndex.length; i++){
        if(arrIndex[i].length > 1){
                mainContent.appendChild(
                    IndexWrapper(
                        arrLower[i],
                        getTitleDate(arrIndex[i]),
                        getTitleOnly(arrIndex[i])
                    )
                );
            }
        }
    }else{
        mainContent.appendChild(emptyIndexWrapper());
    }
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