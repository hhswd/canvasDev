var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    // 水平渐变
    //gradient = context.createLinearGradient(0,0,canvas.width,0);
    // 垂直渐变
    //gradient = context.createLinearGradient(0,0,0,canvas.height);
    // 垂直渐变一半画布
    gradient = context.createLinearGradient(0,0,0,canvas.height/2);
    // 对角线渐变
    //gradient = context.createLinearGradient(0,0,canvas.width,canvas.height);

// 渐变线上的颜色停止点
gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(1, 'yellow');

// 定义渐变填充属性
context.fillStyle = gradient;
context.rect(0,0,canvas.width,canvas.height);
context.fill();

