var canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d');

context.lineJoin = 'round';
context.lineWidth = '30';

context.font = '24px Helvetica';
context.fillText('Click anywhere to erase', 175,40);

// strockRect():外围线框考虑lineJoin属性
context.strokeRect(75,100,200,200);
// fillRect()
context.fillRect(325,100,200,200);

// clearRect()
context.canvas.onmousedown = function(e){
  context.clearRect(0,0,canvas.width,canvas.height);
};
