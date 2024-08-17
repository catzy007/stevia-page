//request parse markdown
	function reqParseMarkdown(type, contentPath){
		executeXhr(contentPath, showMarkdown, type);
	}

//markdown parser
	function showMarkdown(type){
		// console.time("Parser");

		var markdown = (this.responseText);
		marked.use(createDirectives(), 
			{async: false, pedantic: false,
			breaks: false, gfm: true,
			renderer});
		var html = marked.parse(markdown);

		html = DOMPurify.sanitize(html, 
			{ ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
		document.getElementById('main-content').innerHTML = html;

		// console.log(getSiteIdentifier()[2]);
		if(getSiteIdentifier()[2]){
			document.title = getSiteIdentifier()[2];
		}

	//enable comments on post
		if(type == "POST" && enableComments()){
			loadComments();
		}

	//code highlighter
		hljs.registerAliases("undefined", "bash");
		hljs.configure({languages: ["bash"]});
		hljs.highlightAll();
		// console.timeEnd("Parser");
	}

//load disqus comments
	function loadComments(){
		document.getElementById('contentComments').style.display = 'block';
		/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
		var disqus_shortname = getDisqusShortname();
		var disqus_identifier = getSiteIdentifier()[0];
		var disqus_url = getSiteIdentifier()[1];
		var disqus_config = function () { 
			this.language = getSiteIdentifier()[3];
		};
		/* * * DON'T EDIT BELOW THIS LINE * * */
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	}