//get and show pages====================================================================================
function getPagesArray(){
	var text = this.responseText;
	var arrPure = getArrPure(text);
	var arrPages = getArrFilter(text);
//show menu in all pages
	setPageMenu(arrPages, arrPure);
//get requested post from url
	var url = window.location.hash.substr(1);
	var hash = getUrlRequest(url);
//if post url match with page index
	for(var i=0; i<arrPages.length; i++){
	//requested page
		setBlogIdentifier("", "", arrPure[i], "");
		if(hash.includes("search-")){
		//show search page
			var sKeyword = hash.replace("search-",'');
			executeXhr("./posts/index.md", getSearchRequest, "POST-INDEX", "", sKeyword);
			break;
		}else if(hash == arrPages[i] && hash == "index"){
		//show post index page
			executeXhr("./posts/index.md", getIndexArray, "POST-INDEX");
			break;
		}else if(hash == arrPages[i] && hash == "category"){
		//show category page
			executeXhr("./pages/category/index.md", getCategoryArray, "CATEGORY");
			break;
		}else if(hash.includes("subcategory-")){
		//show subcategory page
			var subcat = hash.replace("subcategory-",'');
			executeXhr("./pages/category/"+subcat+".md", getSubcategoryArray, "SUBCATEGORY", "", subcat);
			break;
		}else if(hash == arrPages[i]){
		//set shown page
			var page="./pages/"+hash+"/index.md";
		//get page and parse to html
			reqParseMarkdown("PAGE", page, "#!", "#!");
			break;
		}
	}
//if requested url not found in page index
	if(i == arrPages.length){
		executeXhr("./posts/index.md", getPostsArray, "POST-INDEX")
	}
}

function setPageMenu(arrPages, arrPure){
	var pages="";
	for(var i=0; i<arrPages.length; i++){
		// if(i>0){
		// 	pages+= "<a class=\"text-pages-seperator\"> | </a>";
		// }
		if(arrPages[i] == "home"){
			pages+= "<a class=\"text-pages\" onclick=\"location.href='./'\">Home</a>";
		}else{
			pages+= "<a class=\"text-pages\" onclick=\"location.href='#!" + arrPages[i] + 
					"';refreshed()\">" + arrPure[i] +"</a>";
		}
		//console.log(i + " " + arrPages[i] + " " + arrPure[i]);
	}
	document.getElementById('Pages').innerHTML = pages;
}