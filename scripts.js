
// 1. Store the properties of the pastry both quantity and glaze 
// 2. Increment the the number in the shopping cart every time items are added for feedback


var i = localStorage.getItem('inc') || 0;

function buttonClick() {
	var eID = document.getElementById("quan");
	var Quantity = parseInt(eID.options[eID.selectedIndex].text);

	var gID = document.getElementById("glaze");
	var Glaze = gID.options[gID.selectedIndex].text;

	i = parseInt(i) + Quantity;

	localStorage.setItem('inc', i);
	document.getElementById('inc').value = i;
	document.getElementById('demo').innerHTML = Glaze;
	document.getElementById('demo2').innerHTML = Quantity;


}

window.onload = function() {

	document.getElementById('inc').value = i;
};

// 3. Show feedback when items are added as to glaze and quantity

function toggleText() {
	var text = document.getElementById("demo3");
	if (text.style.display === "none") {
		text.style.display = "block";
	} 
}

function toggleText2() {
	var text = document.getElementById("demo4");
	if (text.style.display === "none") {
		text.style.display = "block";
	} 
}