

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.4; 
var positionStep= 0.004; //variable for the rate the bar will move
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed; //spin on the x-as
myOtherBox.object3D.rotation.y += rotationSpeed; //spin on the y-as
myOtherBox.object3D.rotation.z += rotationSpeed; //spin on the z-as
myOtherBox.object3D.position.x += positionStep;
myOtherBox.object3D.position.y += positionStep;
myOtherBox.object3D.position.z += positionStep;
console.log(myOtherBox.object3D.rotation.x);
console.log(myOtherBox.object3D.position.x);
}

setInterval(spin, 16); //equivalent to 60 fps
