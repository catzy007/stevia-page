function loadHomepageFeatured(){
    var text = this.responseText;
    var featured = text
    var featuredLower = text.toLowerCase();
    setElmtThumbnail("featuredPostImg", "./posts/" + featuredLower + "/thumbnail.jpg", "mobile");
    //desktop featured
    document.getElementById("featuredPostCard").href = "./loader.html?post=" + featuredLower;
    document.getElementById("featuredPostDate").innerHTML = getTitleDate(featured);
    document.getElementById("featuredPostTitle").innerHTML = getTitleOnly(featured);
    document.getElementById("featuredPostCard").style.display = 'block';
    //mobile featured
    document.getElementById("featuredPostCardM").href = "./loader.html?post=" + featuredLower;
    document.getElementById("featuredPostDateM").innerHTML = getTitleDate(featured);
    document.getElementById("featuredPostTitleM").innerHTML = getTitleOnly(featured);
    document.getElementById("featuredPostCardM").style.display = 'block';
}