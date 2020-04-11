//request parse markdown
	function reqParseMarkdown(type, url, prevPost, nextPost){
		executeXhr(url, showMarkdown, type, [prevPost, nextPost]);
	}

//markdown parser
	function showMarkdown(type, postInfo){
		var markdown = (this.responseText || postInfo[2]);
		//console.log(postInfo);
		var converter = new showdown.Converter();
		var html = converter.makeHtml(markdown);
		document.getElementById('Posts').innerHTML = html;

		if(getBlogIdentifier()[2] !== ""){
			document.title = getBlogIdentifier()[2];
		}
		
	//get and parse next, prev posts
		if(postInfo[0] != '#!'){
			var BtnPrev = "<button class='btn btn-info' onclick=\"location.href='"+postInfo[0]+"';refreshed()\">Previous Post</button>";
			document.getElementById('BtnPrev').innerHTML = BtnPrev;
			//console.log(BtnPrev);
		}
		if(postInfo[1] != '#!'){
			var BtnNext = "<button class='btn btn-info' onclick=\"location.href='"+postInfo[1]+"';refreshed()\">Next Post</button>"; 				
			document.getElementById('BtnNext').innerHTML = BtnNext;
			//console.log(BtnNext);
		}

	//enable comment on post
		if(type == "POST" && enableComments()){
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			var disqus_shortname = getDisqusShortname();
			var disqus_identifier = getBlogIdentifier()[0];
			var disqus_url = getBlogIdentifier()[1];
			var disqus_config = function () { 
				this.language = getBlogIdentifier()[3];
			};

			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		}
	}
