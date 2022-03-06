function loadContentPost(urlRequest, pageRequest){
    var contentPath = "./posts/"+pageRequest+"/index.md";
    document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(getTitleOnly(pageRequest)), "en-us");
    reqParseMarkdown("POST", contentPath);
}

function loadContentPages(urlRequest, pageRequest){
    var contentPath = "./pages/"+pageRequest+"/index.md";
    document.getElementById("featuredPostImg").src = checkImgExist("./pages/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    reqParseMarkdown("PAGES", contentPath);
}