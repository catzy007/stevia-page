
//get and show posts========================================================================================
function getPostsArray(){
    var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrPosts = getArrFilter(text);
//get requested post from url
    var url = window.location.hash.substr(1);
    var hash = getUrlRequest(url);    
//if user request specific page
    if(hash !== null && hash !== ''){
    //check if post url valid
        for(var i=0; i<arrPosts.length; i++){
        //requested page
            if(hash == arrPosts[i]){
                setBlogIdentifier("/blog/#!" + hash, window.location.href, getSlicedTitle(getCleanedTitle(arrPure[i])), "en");
            //set shown post
                var post="./posts/"+hash+"/index.md";
            //set prev and next post
                var prevPost = getPrevPost(arrPosts, i);
                var nextPost = getNextPost(arrPosts, i);
            //get post and parse to html
                reqParseMarkdown("POST", post, prevPost, nextPost);
                break;
            }
        }
    //if requested url not found in pages and posts
        if(i == arrPosts.length){
            setBlogIdentifier("/blog/#!", window.location.href, "POST Not Found!", "en");
            xhrError("PAGE","Not Found");
        }
//if no specific post requested = show homepage/first post in index
    }else{
        setBlogIdentifier("/blog/#!" + arrPosts[0], window.location.href, getSlicedTitle(getCleanedTitle(arrPure[0])), "en");
    //set shown post
        var post="./posts/"+arrPosts[0]+"/index.md";
    //set prev and next post
        var prevPost = getPrevPost(arrPosts, 0);
        var nextPost = getNextPost(arrPosts, 0);
    //get post and parse to html
        reqParseMarkdown("POST", post, prevPost, nextPost);
    }	
}

function getPrevPost(arrPosts, CurrentIndex){
    if(CurrentIndex-1 < 0){
        return "#!";
    }else{
        return "#!"+arrPosts[CurrentIndex-1];
    }
}

function getNextPost(arrPosts, CurrentIndex){
    if(CurrentIndex+1 >= arrPosts.length){
        return "#!";
    }else{
        return "#!"+arrPosts[CurrentIndex+1];
    }
}
