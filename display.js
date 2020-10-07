/**
 * Handles canvas and display
 */

var mouseDown = false;
var mouseUp = true;

var mouseX = null;
var mouseY = null;
var mousePos = null;

var display = null;
var canvas = null;

document.addEventListener('DOMContentLoaded', function() {
	
	canvas = document.getElementById('canvas');
	canvas.style.left = "0px";
	canvas.style.top = "0px";

	var width = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
	var height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

	canvas.width = width;
	canvas.height = height;

	if (canvas.getContext) {
		display = canvas.getContext("2d");
	}

}, false);

document.onmousedown = function(event) {
	var button = event.button;
	if (button == 0) {
		mouseDown = true;
	}
}

document.onmouseup = function(event) {
	var button = event.button;
	if (button == 0) {
		mouseDown = false;
	}
}

document.onmousemove = function(event) {
	mouseX = event.clientX + window.pageXOffset;
	mouseY = event.clientY + window.pageYOffset;
	mousePos = [mouseX, mouseY];
}

function print(message) {
	console.log(message);
}

function getMouseDown() {
	return mouseDown;
}

function getMouseUp() {
	return !mouseDown;
}

function updatePeripherals() {
	mouseUp = !mouseDown;
}

function getClick() {
	return !mouseDown && !mouseUp;
}

function drawBackground(color) {
	display.globalAlpha = 1;
	display.fillStyle = color;
	display.fillRect(0, 0, canvas.width, canvas.height);
}
