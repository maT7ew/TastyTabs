Welcome to the TaStyTabs!

TaStyTabs is a jQuery FREE TypeScript library for handling content in tabs. Any anchor ```<a href="#tab1">First</a>``` inside any element with ```<ul class="tabs">``` will show element with corresponding id attribute.

For example:
```html
<ul class="tabs">
	<li><a href="#tab1">First</a></li>
	<li><a href="#tab2">Second</a></li>
	<li><a href="#tab3">Third</a></li>
	<li><a href="#tab4">Fourth</a></li>
</ul>
<div id="tab1">Super cool tab number 1.</div>
<div id="tab2">Super cool tab number 2.</div>
<div id="tab3">Super cool tab number 3.</div>
<div id="tab4">Super cool tab number 4.</div>
```

All you have to do is add following code inside your ```<head>``` tag:
```html
<script src="http://cdn.itsatrap.cz/tastytabs/TaStyTabs.min.js"></script>
```
or you can download it from repository.

Working JSFiddle example: https://jsfiddle.net/maT7ew/6b8s30h3/

TaStyTabs library provides an additional functionality over other libraries such as:
* open the right tab when you open a page with hash in URL
* instance is accesible from ```window.tabs``` and provides methods ```hideAllTabs()```, ```showTab(tab: string)``` and ```refresh()```
