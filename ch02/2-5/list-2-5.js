var canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d');

var repeatRadio  = document.getElementById('repeatRadio'),
    repeatXRadio = document.getElementById('repeatXRadio'),
    repeatYRadio = document.getElementById('repeatYRadio'),
    noRepeatRadio = document.getElementById('noRepeatRadio');
    image = new Image();

// 在画布上以某种重复模式来绘制图案
function fillCanvasWithPattern(repeatString){
  var pattern = context.createPattern(image, repeatString);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = pattern;
  context.fillRect(0,0,canvas.width,canvas.height);
  //context.fill();
}

repeatRadio.onclick = function(e){
  fillCanvasWithPattern('repeat');
};

repeatXRadio.onclick = function(e){
  fillCanvasWithPattern('repeat-x');
};

repeatYRadio.onclick = function(e){
  fillCanvasWithPattern('repeat-y');
};

noRepeatRadio.onclick = function(e){
  fillCanvasWithPattern('no-repeat');
};

// Initialization

image.src = 'images/redball.png';
// 默认模式
image.onload = function(e){
  fillCanvasWithPattern('repeat');
};
