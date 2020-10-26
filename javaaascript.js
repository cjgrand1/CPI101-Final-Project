window.onscroll = function() {addDropShadow()};

var header = document.getElementById("header");
var shadow = header.offsetTop;

function addDropShadow() {
	if (window.pageYOffset > shadow) {
		header.classList.add("header-shadow");
	} else {
		header.classList.remove("header-shadow");
	}
}