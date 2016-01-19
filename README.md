Welcome to the TastyTabs!

TastyTabs is a jQuery plugin for handling content in tabs. Any anchor ```<a href="#tab1">First</a>``` inside any element with ```<ul class="tastyTabs">``` will show element with corresponding id attribute.

For example:
```html
<ul class="tastyTabs">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
    <li><a href="#tab4">Tab 4</a></li>
    <li><a href="#tab5">Tab 5</a></li>
</ul>

<div id="tab1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...</div>
<div id="tab2">Ratione nisi officia deleniti, labore animi molestias praesentium itaque? ...</div>
<div id="tab3">Quasi, quia excepturi atque numquam maiores accusantium saepe voluptatibus commodi, cum impedit minima iste. ...</div>
<div id="tab4">Esse aliquid facilis, omnis nesciunt nihil saepe eveniet tempora deserunt dolore cumque numquam. ...</div>
<div id="tab5">Accusantium, consequuntur neque tempora modi deleniti officia facilis quis provident itaque minus consectetur unde qui alias quasi nemo quibusdam animi?</div>
```

All you have to do is add following code inside your ```<head>``` tag:
```html
<script src="http://example.com/tastytabs.min.js"></script>
```
or you can download it from repository.

You can use your own selector:
```JavaScript
$(function () {
    $('.myOwnClass').tastyTabs({
        urlAnchor: false // disable "open the right tab when you open a page with hash in URL" feature
    });
});
```

TastyTabs library provides an additional functionality over other libraries such as:
* open the right tab when you open a page with hash in URL
* small size (1350 bytes)
