function screenVisible() {
	console.log("test");
	document.getElementById("screen-cover").animate([{opacity: 1},{opacity:0}],500);
}
function sparkVisible() {
	document.getElementById("spark-txt").animate([{opacity: 0},{opacity:1}],500,screenVisible);
}
setTimeout(sparkVisible, 500);