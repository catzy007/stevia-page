function fiterSearchKeyword(input){
    return input.replace(/[^\w\s]/gi, '').split(' ').join('-');
}

function startSearch(){
    var keyword = fiterSearchKeyword(document.getElementById("searchInput").value);
    if(keyword){
        location.href = "./loader.html?search=" + keyword;
    }
}

function loadContentSearch(arrIndex, arrLower, urlRequest, pageRequest){
    var searchHitCount = 0;
    var pageHTML = "<h4>Search</h4>";
    var keyword = pageRequest.toLowerCase().split('-').join(' ');
    setSiteIdentifier(pageRequest, urlRequest, capitalize("search"), "en-us");
    document.title = getSiteIdentifier()[2];
    for(var i=0; i<arrIndex.length; i++){
        if(getTitleOnly(arrIndex[i]).toLowerCase().includes(keyword)){
            searchHitCount++;
            pageHTML = pageHTML.concat("<p>");
            pageHTML = pageHTML.concat("<a href='./loader.html?post="+ arrLower[i] +"'>");
            pageHTML = pageHTML.concat(getTitleDate(arrIndex[i])+" - "+getTitleOnly(arrIndex[i]));
            pageHTML = pageHTML.concat("</a>");
            pageHTML = pageHTML.concat("</p>");
        }
    }
    if(searchHitCount <= 0){
        pageHTML = pageHTML.concat("<p>No results found! for keyword " + pageRequest + "</p>");
    }
    document.getElementById('main-content').innerHTML = pageHTML;
}