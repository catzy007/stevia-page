function fiterSearchKeyword(input){
    return input.replace(/[^\w\s]/gi, '').split(' ').join('-');
}

function startSearch(){
    var keyword = fiterSearchKeyword(document.getElementById("searchInput").value);
    if(!keyword){
        keyword = fiterSearchKeyword(document.getElementById("searchInputM").value);
    }
    if(keyword){
        location.href = "./loader.html?search=" + keyword;
    }
}

function searchKeypressHandler(event){
    if(event.key === "Enter"){
        startSearch();
    }
}

function searchContentWrapper(targetUrl, targetDate, targetName){
    var searchElmtPara = document.createElement("p");
    var searchElmtAncr = document.createElement("a");
    searchElmtAncr.innerHTML = targetDate + " - " + targetName;
    searchElmtAncr.href = "./loader.html?post=" + targetUrl;
    searchElmtPara.appendChild(searchElmtAncr);
    return searchElmtPara;
}

function emptySearchWrapper(searchKeyword){
    var SearchEmpty = document.createElement("p");
    SearchEmpty.innerHTML = "No results found! for keyword " + searchKeyword;
    return SearchEmpty;
}

function loadContentSearch(arrIndex, arrLower, urlRequest, pageRequest){
    var searchHitCount = 0;
    var keyword = pageRequest.toLowerCase().split('-').join(' ');
    setSiteIdentifier(pageRequest, urlRequest, keyword + " - Search Results", "en-us");
    document.title = getSiteIdentifier()[2];

    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");
    pageTitle.innerHTML = "Search";
    mainContent.appendChild(pageTitle);

    for(var i=0; i<arrIndex.length; i++){
        if(getTitleOnly(arrIndex[i]).toLowerCase().includes(keyword)){
            searchHitCount++;
            mainContent.appendChild(
                searchContentWrapper(
                    arrLower[i], 
                    getTitleDate(arrIndex[i]), 
                    getTitleOnly(arrIndex[i])
                )
            );
        }
    }
    if(searchHitCount <= 0){
        mainContent.appendChild(emptySearchWrapper(getCleanedTitle(pageRequest)));
    }
}