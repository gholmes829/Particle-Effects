/*
 * Main driver of example code
 */

var particles = new ParticleSystem();
var hasDrawn = false;
var type = 1;

var c = 0;
var t = 0;

particleTypes = {
	1: fire,
	2: sparks,
	3: water,
};

/**
 * Loop that runs constantly, updates and draw particles
 */
animationLoop = function() {
	display.clearRect(0, 0, canvas.width, canvas.height);
	drawBackground("black");
	addParticles();
	particles.generate();
	particles.update();
	particles.draw(display);

	if (!hasDrawn) {
		display.font = "45px Impact";
		display.fillStyle = "white";
		display.fillText("Try clicking and dragging on black canvas!", canvas.width/2-canvas.width/5, 100);
	}

	updatePeripherals();
	window.requestAnimationFrame(animationLoop);
	
}

/**
 * Adds particles when mouse is clicked
 */
addParticles = function() {
	if (getMouseDown()) {
		if (particles.contains([mouseX, mouseY])) {
			particles.add(c, particleTypes[type], [mouseX, mouseY], 2);
			c++;
			if (c%100 == 0) {
				c = 0;
			}
		}
		else {
			particles.add([mouseX, mouseY], particleTypes[type], [mouseX, mouseY], 15);
		}
		hasDrawn = true;
	}	
	if (getClick()) {
		type++;
		if (type%4==0) {
			type = 1;
		}
	}
}

window.requestAnimationFrame(animationLoop);

