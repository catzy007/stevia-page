//category list
function categoryListWrapper(targetUrl, targetName){
    var categoryElmtPara = document.createElement("p");
    var categoryElmtAncr = document.createElement("a");
    categoryElmtAncr.innerHTML = targetName;
    categoryElmtAncr.href = "./loader.html?category=" + targetUrl;
    categoryElmtAncr.classList.add("category-list")
    categoryElmtPara.appendChild(categoryElmtAncr);
    return categoryElmtPara;
}

function loadCategoryList(){
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);

    var categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = "";

    for(var i=0; i<arrCategory.length; i++){
        if(arrCategory[i].length == "1" && arrCategory[i] == "-"){
            arrCategory.splice(i,1);
        }
        categoryList.appendChild(
            categoryListWrapper(
                arrCategoryL[i],
                arrCategory[i]
            )
        );
    }
    categoryList.style.display = 'block';
}

//category page
function loadCategoryPage(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./pages/category/" + pageRequest + ".md", parseCategoryPage, "CATEGORY", pageRequest);
}

function categoryPageWrapper(targetUrl, targetUrlSection, targetDate, targetName){
    var categoryElmtPara = document.createElement("p");
    var categoryElmtAncr = document.createElement("a");
    categoryElmtAncr.innerHTML = targetDate + targetName;
    categoryElmtAncr.href = "./loader.html?" + targetUrlSection + "=" + targetUrl;
    categoryElmtPara.appendChild(categoryElmtAncr);
    return categoryElmtPara;
}

function parseCategoryPage(urlRequest, pageRequest){
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);

    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");

    if(pageRequest == "index"){
        setElmtThumbnail("featuredPostImg", "./posts/thumbnail.jpg", "mobile");
        pageTitle.innerHTML = "Category";
        mainContent.appendChild(pageTitle);
        for(var i=0; i<arrCategory.length; i++){
            mainContent.appendChild(
                categoryPageWrapper(
                    arrCategoryL[i],
                    "category", "",
                    arrCategory[i]
                )
            );
        }
    }else{
        setElmtThumbnail("featuredPostImg", "./pages/category/" + pageRequest + ".jpg", "mobile");
        pageTitle.innerHTML = capitalize(pageRequest);
        mainContent.appendChild(pageTitle);
        for(var i=0; i<arrCategory.length; i++){
            mainContent.appendChild(
                categoryPageWrapper(
                    arrCategoryL[i],
                    "post",
                    getTitleDate(arrCategory[i]) + " - ",
                    getTitleOnly(arrCategory[i])
                )
            );
        }
    }
}