function loadContentRecommended(arrIndex, arrLower){
    var contPostCardId = []; var contPostImgId = [];
    var contPostDateId = []; var contPostTitleId = [];
    var recommendedContentI = []; var recommendedContentL = [];
    var contLoadMax; var dice;

    if(arrIndex.length > 0){
        if(arrIndex.length > 3){
            contLoadMax = 3;
        }else{
            contLoadMax = arrIndex.length;
        }
        document.getElementById("recommendedContent").style.display = 'block';
    }

    for(var i=0; i<contLoadMax; i++){
        dice = Math.floor(Math.random() * arrIndex.length);
        recommendedContentI.push(arrIndex[dice]); 
        recommendedContentL.push(arrLower[dice]);
    }
    
    for(var i=1; i<contLoadMax+1; i++){
        contPostCardId.push("recommendedContentCard"+i.toString());
        contPostImgId.push("recommendedContentImg"+i.toString());
        contPostDateId.push("recommendedContentDate"+i.toString());
        contPostTitleId.push("recommendedContentTitle"+i.toString());
    }

    for(var i=0; i<contLoadMax; i++){
        document.getElementById(contPostCardId[i]).href = "./loader.html?post=" + recommendedContentL[i];
        setElmtThumbnail(contPostImgId[i], "./posts/" + recommendedContentL[i] + "/thumbnail.jpg");
        document.getElementById(contPostDateId[i]).innerHTML = getTitleDate(recommendedContentI[i]);
        document.getElementById(contPostTitleId[i]).innerHTML = getTitleOnly(recommendedContentI[i]);
        document.getElementById(contPostCardId[i]).style.display = 'block';
    }
}