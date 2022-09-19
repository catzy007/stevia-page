function loadHomepageFeatured(){
    var text = this.responseText;
    var featured = text
    var featuredLower = text.toLowerCase();
    document.getElementById("featuredPostCard").onclick = function () { location.href='./loader.html?post=' + featuredLower };
    // document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + featuredLower + "/thumbnail.jpg");
    setElmtThumbnail("featuredPostImg", "./posts/" + featuredLower + "/thumbnail.jpg");
    document.getElementById("featuredPostDate").innerHTML = getTitleDate(featured);
    document.getElementById("featuredPostTitle").innerHTML = getTitleOnly(featured);
    // arrIndex.splice(0, 1); arrLower.splice(0, 1);
    document.getElementById("featuredPostCard").style.display = 'block';
}

function loadHomepageCategory(){
    var categoryList = "";
    var text = this.responseText;
    var arrCategory = parseIndexArray(text)
    var arrCategoryL = parseIndexLower(text)
    for(var i=0; i<arrCategory.length; i++){
        if(arrCategory[i].length == "1" && arrCategory[i] == "-"){
            arrCategory.splice(i,1);
        }
        categoryList = categoryList.concat("<p class='clickable' ");
        categoryList = categoryList.concat("onclick='location.href=\"");
        categoryList = categoryList.concat("./loader.html?category=");
        categoryList = categoryList.concat(arrCategoryL[i] + "\"'>");
        categoryList = categoryList.concat(arrCategory[i] + "</p>\n");
        // console.log(i + " " + arrCategory[i] + " " + arrCategoryL[i]);
    }
    document.getElementById("categoryList").innerHTML = categoryList;
    document.getElementById("categoryList").style.display = 'block';
}