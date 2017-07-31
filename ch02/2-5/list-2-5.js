var canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d');

var patternRadioGroup = document.forms['repeatPattern']['patternRadio'],
    image = new Image();

// 在画布上以某种重复模式来绘制图案
function fillCanvasWithPattern(repeatString){
  var pattern = context.createPattern(image, repeatString);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = pattern;
  context.fillRect(0,0,canvas.width,canvas.height);
  //context.fill();
}

/* 为每一个选项按钮写一个点击响应
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
*/

// Initialization

image.src = 'images/redball.png';

//遍历选项组，找出被选中的项目：
function setSelectedRadio(){
  for(var i=0;i<patternRadioGroup.length;i++){
    var patternRadio = patternRadioGroup[i];
    if(patternRadio.checked === true){
      return patternRadio;
    }
  }
}

// 点击具体模式选项后:
document.forms[0].onclick = function(e){
  var selectedRadio = setSelectedRadio();
  fillCanvasWithPattern(selectedRadio.value);
};

// 图像加载时的初始模式
image.onload = function(e){
  fillCanvasWithPattern('no-repeat');
};
