function loadContentPost(urlRequest, pageRequest){
    var contentPath = "./posts/"+pageRequest+"/content.md";
    // document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + pageRequest + "/thumbnail.jpg");
    setElmtThumbnail(featuredPostImg, "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(getTitleOnly(pageRequest)), "en-us");
    reqParseMarkdown("POST", contentPath);
}

function loadContentPages(urlRequest, pageRequest){
    var contentPath = "./pages/"+pageRequest+"/content.md";
    // document.getElementById("featuredPostImg").src = checkImgExist("./pages/" + pageRequest + "/thumbnail.jpg");
    setElmtThumbnail(featuredPostImg, "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    reqParseMarkdown("PAGES", contentPath);
}