function loadContentPost(urlRequest, pageRequest, contentTitle){
    var contentPath = "./posts/" + pageRequest + "/content.md";
    setElmtThumbnail("featuredPostImg", "./posts/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, getTitleOnly(contentTitle), "en-us");
    reqParseMarkdown("POST", contentPath);
}

function loadContentPages(urlRequest, pageRequest){
    var contentPath = "./pages/" + pageRequest + "/content.md";
    setElmtThumbnail("featuredPostImg", "./pages/" + pageRequest + "/thumbnail.jpg");
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    reqParseMarkdown("PAGES", contentPath);
}