# Stevia Page
### Vanilla.Js + Markdown = :heart:
> Create your blog without databases

This is website (blog) template that serves static page encoded in Markdown. 
At the heart it uses [ShowdownJS](https://github.com/showdownjs/showdown), 
[Vanilla.js](https://vanilla-js.com/) and 
[XMLHttpRequest API (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

### Directory structure
```
.
├── assets
├── css
├── fonts
├── js
├── less
├── scss
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
4. Fill `content.md` with your content using markdown &/ html format.
5. Create `thumbnail.jpg` file with `4:3` aspect ratio.
6. Then open `/posts/index.md` and add directory name `YYYY-MM-DD-post-title-you-want-to-create` to posts index.
7. Git add, commit, and push.
8. If you set CI/CD, your blog will automatically update.

> Make sure only using `1234567890abcdefghijklmnopqrstuvwxyz` and `-` as index separator

### Pros
* You can write in any platform as long as you have git and text editor.
* No need to install additional tools like [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* No need to regenerate static page after content update.

### Cons
* Spacing and layout still not perfect sometimes but can be avoided using HTML.