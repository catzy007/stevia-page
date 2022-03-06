function loadContentIndex(){
    var text = this.responseText;
	var arrIndex = parseIndexArray(text);
    var arrLower = parseIndexLower(text);
    var urlRequest = getUrlRequest();
    var pageRequest = urlRequest.split("=");
    var typeRequest = pageRequest[0].split("?");
    // console.log(arrIndex); console.log(arrLower);
    // console.log(pageRequest); console.log(urlRequest);
    // console.log(typeRequest[1]);

    if(pageRequest[1]){
        executeXhr("./pages/category/index.md", loadContentCategory, "CATEGORY", "category");
        if(typeRequest[1] == "post"){
            loadContentPost(urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "pages"){
            loadContentPages(urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "index"){
            loadPageIndex(arrIndex, arrLower, urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "category"){
            loadCategoryPage(urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "search"){
            //require search-engine/search.js
            loadContentSearch(arrIndex, arrLower, urlRequest, pageRequest[1]);
        }else{
            document.location.href = './';
        }
        document.getElementById("featuredPostCard").style.display = 'block';
        loadContentRecommended(arrIndex, arrLower);
    }else{
        document.location.href = './';
    }

    loadSiteCopyright();
}