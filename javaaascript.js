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

var modal = document.getElementById("ARmodal");

var btn = document.getElementById("ARbtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display ="block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
