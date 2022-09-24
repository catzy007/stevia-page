function loadHomepageIndex(){
    var text = this.responseText;
	//set both index as immutable object
	const arrIndex = Object.freeze(parseIndexArray(text)); 
    const arrLower = Object.freeze(parseIndexLower(text));  
    // console.log(arrIndex); console.log(arrLower);

    executeXhr("./posts/featured.md", loadHomepageFeatured, "FEATURED", "featured");
    executeXhr("./pages/category/index.md", loadHomepageCategory, "CATEGORY", "category");
    loadHomepageLatest(arrIndex, arrLower);
    loadHomepageRecommended(arrIndex, arrLower);
    loadSiteBranding();
    loadSiteCopyright();
}