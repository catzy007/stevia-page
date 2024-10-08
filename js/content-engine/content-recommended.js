function loadContentRecommended(arrIndex, arrLower){
    //perform a shallow copy of both arrays
    let arrIndexC = arrIndex.slice(0);
    let arrLowerC = arrLower.slice(0);
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
    }

    for(var i=0; i<contLoadMax; i++){
        dice = Math.floor(Math.random() * arrIndexC.length);
        recommendedContentI.push(arrIndexC[dice]); 
        recommendedContentL.push(arrLowerC[dice]);
        arrIndexC.splice(dice, 1);
        arrLowerC.splice(dice, 1);
    }
    // console.log(arrIndex); console.log(arrIndexC);
    
    for(var i=1; i<=3; i++){
        contPostCardId.push("recommendedContentCard" + i.toString());
        contPostImgId.push("recommendedContentImg" + i.toString());
        contPostDateId.push("recommendedContentDate" + i.toString());
        contPostTitleId.push("recommendedContentTitle" + i.toString());
    }

    for(var i=0; i<contLoadMax; i++){
        document.getElementById(contPostCardId[i]).href = "./loader.html?post=" + recommendedContentL[i];
        setElmtThumbnail(contPostImgId[i], "./posts/" + recommendedContentL[i] + "/thumbnail.jpg");
        document.getElementById(contPostDateId[i]).innerHTML = getTitleDate(recommendedContentI[i]);
        document.getElementById(contPostTitleId[i]).innerHTML = getTitleOnly(recommendedContentI[i]);
    }

    for(var i=contLoadMax; i<3; i++){
        document.getElementById(contPostCardId[i]).style.display = 'none';
    }
}