function loadHomepageRecommended(arrIndex, arrLower){
    //perform a shallow copy of both arrays
    let arrIndexC = arrIndex.slice(0);
    let arrLowerC = arrLower.slice(0);
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
    }

    for(var i=0; i<recLoadMax; i++){
        dice = Math.floor(Math.random() * arrIndexC.length);
        recommendedPostI.push(arrIndexC[dice]); 
        recommendedPostL.push(arrLowerC[dice]);
        arrIndexC.splice(dice, 1);
        arrLowerC.splice(dice, 1);
    }
    
    for(var i=1; i<=6; i++){
        recPostCardId.push("recommendedPostCard" + i.toString());
        recPostImgId.push("recommendedPostImg" + i.toString());
        recPostDateId.push("recommendedPostDate" + i.toString());
        recPostTitleId.push("recommendedPostTitle" + i.toString());
    }

    for(var i=0; i<recLoadMax; i++){
        document.getElementById(recPostCardId[i]).href = "./loader.html?post=" + recommendedPostL[i];
        setElmtThumbnail(recPostImgId[i], "./posts/" + recommendedPostL[i] + "/thumbnail.jpg");
        document.getElementById(recPostDateId[i]).innerHTML = getTitleDate(recommendedPostI[i]);
        document.getElementById(recPostTitleId[i]).innerHTML = getTitleOnly(recommendedPostI[i]);
    }

    for(var i=recLoadMax; i<6; i++){
        document.getElementById(recPostCardId[i]).style.display = 'none';
    }
}