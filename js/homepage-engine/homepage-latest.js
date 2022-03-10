function loadHomepageLatest(arrIndex, arrLower){
    var arrIdxLatest = []; var arrLowLatest = [];
    var latPostCardId = []; var latPostImgId = [];
    var latPostDateId = []; var latPostTitleId = [];
    var latLoadMax; var arrlink = [];

    if(arrIndex.length > 0){
        if(arrIndex.length > 6){
            latLoadMax = 6;
        }else{
            latLoadMax = arrIndex.length;
        }
        document.getElementById("latestPostH4").style.display = 'block';
    }

    for(var i=0; i<latLoadMax; i++){
        arrIdxLatest.push(arrIndex[i]);
        arrLowLatest.push(arrLower[i]);
    }

    for(var i=1; i<latLoadMax+1; i++){
        latPostCardId.push("latestPostCard"+i.toString());
        latPostImgId.push("latestPostImg"+i.toString());
        latPostDateId.push("latestPostDate"+i.toString());
        latPostTitleId.push("latestPostTitle"+i.toString());
    }

    for(var i=0; i<latLoadMax; i++){
        document.getElementById(latPostCardId[i]).href = "./loader.html?post=" + arrLowLatest[i];
        // document.getElementById(latPostImgId[i]).src = checkImgExist("./posts/" + arrLowLatest[i] + "/thumbnail.jpg");
        setElmtThumbnail(latPostImgId[i], "./posts/" + arrLowLatest[i] + "/thumbnail.jpg");
        document.getElementById(latPostDateId[i]).innerHTML = getTitleDate(arrIdxLatest[i]);
        document.getElementById(latPostTitleId[i]).innerHTML = getTitleOnly(arrIdxLatest[i]);
        document.getElementById(latPostCardId[i]).style.display = 'block';
    }
}