function loadContentIndex(){
    var text = this.responseText;
    //set both index as immutable object
	const arrIndex = Object.freeze(parseIndexArray(text)); 
    const arrLower = Object.freeze(parseIndexLower(text));
    var urlRequest = getUrlRequest();
    var pageRequest = urlRequest.split("=");
    var typeRequest = pageRequest[0].split("?");
    // console.log(typeRequest[1]);

    if(pageRequest[1]){
        executeXhr("./pages/category/index.md", loadCategoryList, "CATEGORY", "category");
        if(typeRequest[1] == "post"){
            loadContentPost(urlRequest, pageRequest[1], fetchContentTitle(pageRequest[1], arrIndex));
        }else if(typeRequest[1] == "pages"){
            loadContentPages(urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "index"){
            loadPageIndex(arrIndex, arrLower, urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "category"){
            loadCategoryPage(urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "search"){
            loadContentSearch(arrIndex, arrLower, urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "unindexed"){
            loadPageUnindexed(urlRequest, pageRequest[1]);
        }else{
            document.location.href = './';
        }
        document.getElementById("featuredPostCard").style.display = 'block';
        loadContentRecommended(arrIndex, arrLower);
    }else{
        document.location.href = './';
    }

    loadSiteBranding();
    loadSiteCopyright();
}