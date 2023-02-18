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
    setElmtThumbnail("featuredPostImg", "./posts/thumbnail.jpg", "mobile");
    setSiteIdentifier(pageRequest, urlRequest, capitalize("index"), "en-us");

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