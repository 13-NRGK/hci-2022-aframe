

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.4; 
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed; //draait op de x-as
myOtherBox.object3D.rotation.y += rotationSpeed; //draait nu ook op de y-as
myOtherBox.object3D.rotation.z += rotationSpeed; //drait nu ook op de z-as
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
