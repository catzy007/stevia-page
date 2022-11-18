function loadHomepageFeatured(){
    var text = this.responseText;
    var featured = text
    var featuredLower = text.toLowerCase();
    document.getElementById("featuredPostCard").onclick = function () { location.href='./loader.html?post=' + featuredLower };
    setElmtThumbnail("featuredPostImg", "./posts/" + featuredLower + "/thumbnail.jpg");
    document.getElementById("featuredPostDate").innerHTML = getTitleDate(featured);
    document.getElementById("featuredPostTitle").innerHTML = getTitleOnly(featured);
    document.getElementById("featuredPostCard").style.display = 'block';
}