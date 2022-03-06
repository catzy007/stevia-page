function loadContentCategory(){
    var categoryList = "";
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);
    for(var i=0; i<arrCategory.length; i++){
        if(arrCategory[i].length == "1" && arrCategory[i] == "-"){
            arrCategory.splice(i,1);
        }
        categoryList+= "<p class=\"clickable\"" +
                    "onclick=\"location.href='./loader.html?category=" + 
                    arrCategoryL[i] +"'\">" + 
                    arrCategory[i] + "</p>\n";
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
    var pageHTML = "<h4>"+capitalize(pageRequest)+"</h4>";
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);
    for(var i=0; i<arrCategory.length; i++){
        pageHTML = pageHTML.concat("<a href='./loader.html?post="+ arrCategoryL[i] +"'>");
        pageHTML = pageHTML.concat("<p>"+getTitleDate(arrCategory[i])+" - "+getTitleOnly(arrCategory[i])+"</p>");
        pageHTML = pageHTML.concat("</a>");
    }
    document.getElementById("main-content").innerHTML = pageHTML;
}