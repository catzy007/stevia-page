# Stevia Page
### Vanilla.Js + Markdown = :heart:
> Create your blog without databases

This blog framework made by fusing [markdown parser](https://github.com/showdownjs/showdown), [Vanilla.js](http://vanilla-js.com/) and [XMLHttpRequest API (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

### Directory structure
```
.
├── assets
│   ├── img-category
│   └── img-latest
├── css
├── js
├── pages
│   ├── your-custom-page
│   │   └── index.md (put your page content here)
│   ├── category
|   └── index.md (page index)
└── posts
    ├── YYYY-MM-DD-post-title-you-want-to-create
    │   └── index.md (put your post content here)
    └── index.md (post index)
```

### To make new posts, do (for github users)
1. Clone this git.
2. Go to `posts` and make new directory with format.
```
YYYY-MM-DD-post-title-you-want-to-create
(LOWERCASE)
```
3. Go to directory you just made and create `index.md`.
4. Fill `index.md` with your content using markdown &/ html format.
5. Then open `/posts/index.md` and add directory name `(YYYY-MM-DD-post-title-you-want-to-create)` to posts index.
6. git add, commit, dan push.
7. if you set CI/CD, your blog will automatically updated.

> Make sure only using `1234567890abcdefghijklmnopqrstuvwxyz` and `-` as index seperator

### Pros
* You can write in any platform as long as you have git and text editor.
* No need to install additional tools like [Hugo](https://gohugo.io/) & [Jekyll](https://jekyllrb.com/).
* No need to regenerate static page after update content.

### Cons
* Spacing and layouting still broken sometimes but can be avoided using HTML.
