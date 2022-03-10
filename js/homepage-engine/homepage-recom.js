function loadHomepageRecommended(arrIndex, arrLower){
    var recPostCardId = []; var recPostImgId = [];
    var recPostDateId = []; var recPostTitleId = [];
    var recommendedPostI = []; var recommendedPostL = [];
    var recLoadMax; var dice;

    if(arrIndex.length > 0){
        if(arrIndex.length > 6){
            recLoadMax = 6;
        }else{
            recLoadMax = arrIndex.length;
        }
        document.getElementById("recommendedPostH4").style.display = 'block';
    }

    for(var i=0; i<recLoadMax; i++){
        dice = Math.floor(Math.random() * arrIndex.length);
        recommendedPostI.push(arrIndex[dice]); //arrIndex.splice(dice, 1); 
        recommendedPostL.push(arrLower[dice]); //arrLower.splice(dice, 1);
    }
    
    for(var i=1; i<recLoadMax+1; i++){
        recPostCardId.push("recommendedPostCard"+i.toString());
        recPostImgId.push("recommendedPostImg"+i.toString());
        recPostDateId.push("recommendedPostDate"+i.toString());
        recPostTitleId.push("recommendedPostTitle"+i.toString());
    }

    for(var i=0; i<recLoadMax; i++){
        document.getElementById(recPostCardId[i]).href = "./loader.html?post=" + recommendedPostL[i];
        setElmtThumbnail(recPostImgId[i], "./posts/" + recommendedPostL[i] + "/thumbnail.jpg");
        document.getElementById(recPostDateId[i]).innerHTML = getTitleDate(recommendedPostI[i]);
        document.getElementById(recPostTitleId[i]).innerHTML = getTitleOnly(recommendedPostI[i]);
        document.getElementById(recPostCardId[i]).style.display = 'block';
    }
}