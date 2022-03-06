# Stevia Page
### Vanilla.Js + Markdown = :heart:
> Create your blog without databases

This is website (blog) template that serves static page encoded in Markdown. 
At its heart it uses [ShowdownJS](https://github.com/showdownjs/showdown), 
[Vanilla.js](http://vanilla-js.com/) and 
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
│   │   └── index.md (put your page content here)
│   ├── about
|   │   └── index.md (about page content)
|   ├── contact
|   │   └── index.md (contact page content)
|   └── index.md (page index)
└── posts
    ├── YYYY-MM-DD-post-title-you-want-to-create
    │   ├── index.md (put your post content here)
    │   ├── picture.jpg (post image)
    │   ├── thumbnail.jpg (post thumbnail)
    │   └── document.doc (downloadable document)
    └── index.md (post index)
```

### To make new posts, do (for GitHub users)
1. Clone this git.
2. Go to `posts` and make new directory with format (lowercase).
```
YYYY-MM-DD-post-title-you-want-to-create
```
3. Go to directory you just made and create `index.md`.
4. Fill `index.md` with your content using markdown &/ html format.
5. Create `thumbnail.jpg` file with `800 x 600` resolution.
6. Then open `/posts/index.md` and add directory name `(YYYY-MM-DD-post-title-you-want-to-create)` to posts index.
7. Git add, commit, and push.
8. If you set CI/CD, your blog will automatically updated.

> Make sure only using `1234567890abcdefghijklmnopqrstuvwxyz` and `-` as index separator

### Pros
* You can write in any platform as long as you have git and text editor.
* No need to install additional tools like [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* No need to regenerate static page after update content.

### Cons
* Spacing and layouting still not perfect sometimes but can be avoided using HTML.