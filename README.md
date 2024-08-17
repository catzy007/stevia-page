# Stevia Page
### Vanilla.Js + Markdown = :heart:
> Create your blog without databases

This is website (blog) template that serves static page encoded in Markdown. 
At the heart it uses [ShowdownJS](https://github.com/showdownjs/showdown), 
[Vanilla.js](http://vanilla-js.com/) and 
[XMLHttpRequest API (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

### Directory structure
```
.
├── assets
├── css
├── fonts
├── js
├── sm
├── pages
│   ├── your-custom-page
│   │   └── content.md (put your page content here)
│   ├── about
|   │   └── content.md (about page content)
|   ├── contact
|   │   └── content.md (contact page content)
|   └── index.md (page index)
└── posts
    ├── YYYY-MM-DD-post-title-you-want-to-create
    │   ├── content.md (put your post content here)
    │   ├── thumbnail.jpg (post thumbnail)
    │   ├── picture.jpg (post image)
    │   └── document.doc (downloadable document)
    └── index.md (post index)
```

### To make new posts, do (for Git users)
1. Clone this git.
2. Go to `posts` and make new directory with format (lowercase).
```
YYYY-MM-DD-post-title-you-want-to-create
```
3. Go to directory you just made and create `content.md`.
4. Fill `content.md` with your content using Markdown format.
5. Create `thumbnail.jpg` file with `4:3` aspect ratio.
6. Then open `/posts/index.md` and add directory name `YYYY-MM-DD-post-title-you-want-to-create` to posts index.
7. Git add, commit, and push.
8. If CI/CD is set, the blog will automatically get updated.

> Make sure only using `1234567890abcdefghijklmnopqrstuvwxyz` and `-` as index separator

### Pros
* Write in any platform as long as git and text editor is available.
* No need to install additional tools like [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* No need to regenerate static page after content update.
* Markdown Directives and standard HTML tag is supported for more customization.

### Cons
* There are an edge case where spacing and layout may require additional step such as using Markdown Directives and standard HTML.
