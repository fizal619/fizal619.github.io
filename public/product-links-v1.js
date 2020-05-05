<script src="https://imgix.github.io/drift/dist/Drift.js"></script>
<script>
var domReady=function(a){var b=!1,c=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",d),window.removeEventListener("load",d)):(document.detachEvent("onreadystatechange",d),window.detachEvent("onload",d))},d=function(){b||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(b=!0,c(),a())};if("complete"===document.readyState)a();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",d),window.addEventListener("load",d);else{document.attachEvent("onreadystatechange",d),window.attachEvent("onload",d);var e=!1;try{e=null==window.frameElement&&document.documentElement}catch(a){}e&&e.doScroll&&!function d(){if(!b){try{e.doScroll("left")}catch(a){return setTimeout(d,50)}b=!0,c(),a()}}()}};
 
 domReady(function(){
   console.log('Dom ready');
 });



setTimeout(function(){
	var summaryItems = document.querySelectorAll('a.summary-thumbnail-container.sqs-gallery-image-container');
	var summaryTitles = document.querySelectorAll('a.summary-title-link');
	console.log(summaryItems.length, 'items to modify')
	summaryItems.forEach(function(item){
	  item.href = '#';
	});

	summaryTitles.forEach(function(title){
	  title.href = '#';
	});
}, 1000)

</script>