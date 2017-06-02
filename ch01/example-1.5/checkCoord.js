var readout = document.getElementById("readout"),
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    spritesheet = new Image();

/**
 * 转换鼠标窗口坐标为画布坐标
 * @param  {[type]} canvas [description]
 * @param  {[type]} x      [description]
 * @param  {[type]} y      [description]
 * @return {[type]}        [description]
 */
function windowToCanvas(canvas, x, y){
  var bbox = canvas.getBoundingClientRect();
  return {
    x: (x-bbox.left)*(canvas.width / bbox.width),
    y: (y-bbox.top)*(canvas.height / bbox.height)
  };
}

function drawBackground(){
  var VERTICAL_LINE_SPACING = 12,
      i = context.canvas.height;
  context.clearRect(0,0,canvas.width,canvas.height);
  context.strokeStyle = 'lightgray';
  context.lineWidth = 0.5;

  while(i>VERTICAL_LINE_SPACING*4){
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
    i -= VERTICAL_LINE_SPACING;
  }
}

function drawSpritesheet(){
  context.drawImage(spritesheet,0,0);
}

/**
 * 绘制鼠标十字标线
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
function drawGuidelines(x, y){
  context.strokeStyle = "rgba(0,0,230,0.8)";
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
}

/**
 * 绘制鼠标水平标线
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
function drawVerticalLine(x){
  context.beginPath();
  context.moveTo(x+0.5,0);
  context.lineTo(x+0.5,canvas.height);
  context.stroke();
}

/**
 * 绘制鼠标垂直标线
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
function drawHorizontalLine(y){
  context.beginPath();
  context.moveTo(0,y+0.5);
  context.lineTo(canvas.width, y+0.5);
  context.stroke();

}

function updateReadout(x, y){
  readout.innerText = '(' + x.toFixed(0) + ', ' + y.toFixed(0) + ')';
}

/**
 * 鼠标事件响应
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
canvas.onmousemove = function(e){
  var loc = windowToCanvas(canvas, e.clientX, e.clientY);

  drawBackground();
  drawSpritesheet();
  drawGuidelines(loc.x, loc.y);
  updateReadout(loc.x, loc.y);
};

// initialization
spritesheet.src = "images/running-sprite-sheet.png";
spritesheet.onload = function(e){
  drawSpritesheet();
};

drawBackground();
