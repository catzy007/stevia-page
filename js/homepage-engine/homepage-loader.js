function loadHomepageIndex(){
    var text = this.responseText;
	var arrIndex = parseIndexArray(text);
    var arrLower = parseIndexLower(text);    
    // console.log(arrIndex); console.log(arrLower);

    executeXhr("./posts/featured.md", loadHomepageFeatured, "FEATURED", "featured");
    executeXhr("./pages/category/index.md", loadHomepageCategory, "CATEGORY", "category");
    loadHomepageLatest(arrIndex, arrLower);
    loadHomepageRecommended(arrIndex, arrLower);
    loadSiteBranding();
    loadSiteCopyright();
}