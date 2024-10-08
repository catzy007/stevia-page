#### Make Stevia Page Yours
*Thursday, March 10, 2022*

Assuming you have created a GitHub repository 
using Stevia Page. 

* Open your repository and open `index.html` file.
* Then press `Edit this file` button.

![img](./posts/2022-03-10-make-stevia-page-yours/01.png)

* Change following to match your needs.
    ```
    <meta name="description" content="Your site description"/>
    <meta name="keywords" content="Your site keywords"/>
    <meta name="author" content="Site Owner"/>
    ```

* Scroll down and press `Commit changes`

![img](./posts/2022-03-10-make-stevia-page-yours/02.png)

* Do the same with `loader.html` file.
* Next, go to `js/website-info.js` and change below to match your needs.
    ```
    var WebsiteName = "Stevia Page";
    var copyrightOwner = "Site Owner";
    ```

* If you need post comments, create [Disqus Acount](https://disqus.com/profile/signup/) and create [Disqus Shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname) then change `disqusShortname` to match yours.
    ```
    var disqusShortname = "umbrella-test";
    ```

* If you want to disable post comments, then change `var enableDisqus = true;` to `var enableDisqus = false;`

![img](./posts/2022-03-10-make-stevia-page-yours/03.png)