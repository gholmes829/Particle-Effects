/**
 * Definitions for different particle effects. Can add more as needed.
 */

var flamesColors = ["rgb(255, 0, 0)", "rgb(255, 100, 50)", "rgb(184, 15, 10)", "rgb(255, 100, 100)", "rgb(255, 50, 50)"];
var smokeColors = ["rgb(100, 100, 100)", "rgb(150, 150, 150)", "rgb(50, 50, 50)", "rgb(0, 0,0 )"];
var waterColors = ["rgb(0, 0, 255)", "rgb(0, 100, 255)", "rgb(50, 0, 255)", "rgb(50, 50, 255)"];
var sparksColors = ["rgb(255, 0, 100)", "rgb(255, 100, 150)", "rgb(184, 15, 110)", "rgb(255, 100, 200)", "rgb(255, 50, 150)"];

var flames = new ParticleGroup([[-10, 10], [2, 7]], [5, 15], [[-0.5, 0.5], [-3, -1]], flamesColors, [50, 80], [[0, 0], [0.5, 1]], [[0, 0], [0, 0]], 1);
var smoke = new ParticleGroup([[-10, 10], [-10, -50]], [15, 20], [[-1, 1], [-2, -1]], smokeColors, [1, 10], [[0, 0], [-0.1, -0.3]], [[0.015, 0.015], [0.0005, 0.0005]], 0.5);
var fire = new ParticleSystem(["flames", flames, [0, 0]], ["smoke", smoke, [0, -50]]);
fire.resize(150);

var water = new ParticleGroup([[-25, 25], [0, 25]], [10, 20], [[-1, 1], [1, 3]], waterColors, [30, 50], [[0, 0], [0.15, 0.3]], [[0, 0], [0.0001, 0.0001]], 0.5);
water.resize(200);
 
var sparks = new ParticleGroup([[-10, 10], [-10, 10]], [5, 10], [[-2, 2], [-2, 2]], sparksColors, [30, 50], [[0, 0], [0.375, 0.5]], [[0, 0], [0.0001, 0.00025]], 1);
sparks.resize(225);

