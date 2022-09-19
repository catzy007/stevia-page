function loadContentCategory(){
    var categoryList = "";
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);
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

function loadCategoryPage(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./pages/category/"+pageRequest+".md", parseCategoryPage, "CATEGORY", pageRequest);
}

function parseCategoryPage(urlRequest, pageRequest){
    var text = this.responseText;
    var pageHTML = "";
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);
    if(pageRequest == "index"){
        pageHTML = pageHTML.concat("<h4>Category</h4>");
        for(var i=0; i<arrCategory.length; i++){
            pageHTML = pageHTML.concat("<p>");
            pageHTML = pageHTML.concat("<a href='./loader.html?category=");
            pageHTML = pageHTML.concat(arrCategoryL[i] + "'>");
            pageHTML = pageHTML.concat(arrCategory[i]);
            pageHTML = pageHTML.concat("</a>");
            pageHTML = pageHTML.concat("</p>");
        }
    }else{
        pageHTML = pageHTML.concat("<h4>"+capitalize(pageRequest)+"</h4>");
        for(var i=0; i<arrCategory.length; i++){
            pageHTML = pageHTML.concat("<p>");
            pageHTML = pageHTML.concat("<a href='./loader.html?post=");
            pageHTML = pageHTML.concat(arrCategoryL[i] + "'>")
            pageHTML = pageHTML.concat(getTitleDate(arrCategory[i]) + " - ");
            pageHTML = pageHTML.concat(getTitleOnly(arrCategory[i]))
            pageHTML = pageHTML.concat("</a>");
            pageHTML = pageHTML.concat("</p>");
        }
    }
    document.getElementById("main-content").innerHTML = pageHTML;
}