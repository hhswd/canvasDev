var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.lineJoin = 'round';
context.lineWidth = 30;

context.font = '24px Helvetica';
context.fillText('Click anywhere to erase', 175,200);

// 描边颜色
context.strokeStyle = 'GoldenRod';
// 填充颜色(透明度) rgba(0,0,255,0)
context.fillStyle = 'rgba(0,0,255)';
// golbalAlpha属性会应用于所有绘制的图形上（包括描边和填充）
context.globalAlpha = 0.5;

context.strokeRect(75,100,200,200);
// 在线框内部填充矩形的坐标运算
context.fillRect(90,115,170,170);
context.fillRect(325,100,200,200);

/*采用rect来描路径
context.rect(75,100,200,200);
context.stroke();

context.rect(90,115,170,170);

context.rect(325,100,200,200);
context.fill();
*/

context.canvas.onmousedown = function(e){
  context.clearRect(0,0,canvas.width,canvas.height);
};
