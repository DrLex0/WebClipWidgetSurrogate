/*
  Surrogate Web Clip Widget
  2020 Alexander Thomas
  License: public domain (https://creativecommons.org/publicdomain/zero/1.0/)

  Update the url and refreshInterval to your needs.
*/


var url = "https://en.m.wikipedia.org/wiki/Special:Random";

// The iframe will only be reloaded upon widget activation if last refresh was longer than this ago.
// All time values are in milliseconds.
var refreshInterval = 120000;


// No changes should be needed below this line.
var lastLoadTime = 0;


function showWait() {
	document.getElementById("wait").style.visibility = 'visible';
}

function hideWait() {
	// The ONLY way to make this work is to add the onload property to the iframe in the HTML.
	// With addEventListener, it just doesn't work in Dashboard although it works in Safari.
	document.getElementById("wait").style.visibility = 'hidden';
}

function onShow() {
	var date = new Date();
	if(date.getTime() - lastLoadTime > refreshInterval) {
		showWait();
		var theFrame = document.getElementById("theFrame");
		// Setting the src will force a reload, even if it's the same as before
		theFrame.src = url;
		lastLoadTime = date.getTime();
	}
}


if (window.widget) {
	widget.onshow = onShow;
}
