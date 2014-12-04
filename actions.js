// JavaScript Document
var navs = document.getElementsByTagName('nav');
for (var i = 0;i < navs.length;i++) {
	navs[i].style.display = 'block';
}
var articles = document.getElementsByTagName('article');
for (var a = 0;a < articles.length;a++) {
	var lis = articles[a].getElementsByTagName('li');
	for (var i = 0;i < lis.length;i++) {
		if (lis[i].className == '') {
			lis[i].className = 'normal';
		}
		var hrefs = lis[i].getElementsByTagName('a');
		for (var h = 0;h < hrefs.length;h++) {
			hrefs[h].setAttribute('target', '_blank');
		}
	}
}
function showToTop() {
	if(elementInViewport(document.getElementById('education'))) {
		document.getElementById('top').style.display = 'block';
	} else {
		document.getElementById('top').style.display = 'none';
	}
}
// Source for elementInViewport() -- https://gist.github.com/2300296
function elementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return rect.top < (window.innerHeight || document.body.clientHeight) && rect.left < (window.innerWidth || document.body.clientWidth);
}

function showCascade() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '.cascade{background:rgba(0,0,255,.3);box-shadow:0px 0px 5px rgba(0,0,255,.3);}';
}
function showMobile() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '.mobile{background:rgba(0,0,255,.3);box-shadow:0px 0px 5px rgba(0,0,255,.3);}';
}
function showPHP() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '.php{background:rgba(255,0,0,.3);box-shadow:0px 0px 5px rgba(255,0,0,.3);}';
}
function showSQL() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '.mysql{background-color:rgba(0,255,0,.3);box-shadow:0px 0px 5px rgba(0,255,0,.3);}';
}
function showADA() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '.ada{background:rgba(255,255,0,.5);box-shadow:0px 0px 5px rgba(255,255,0,.5);}';
}
function clearAll() {
	styleEl = document.getElementById("forJS");
	styleEl.innerHTML = '';
}
function showMore(articleID, el) {
	styleEl = document.getElementById("forJS");
	if (el.innerHTML == 'Show All') {
		styleEl.innerHTML = styleEl.innerHTML + '#' + articleID + ' ul li.normal {display:list-item;}';
		el.innerHTML = 'Show Highlights';
	} else {
		styleEl.innerHTML = styleEl.innerHTML.replace('#' + articleID + ' ul li.normal {display:list-item;}','');
		el.innerHTML = 'Show All';
	}
}