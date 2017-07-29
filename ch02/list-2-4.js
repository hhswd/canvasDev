var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    // 放射渐变
    gradient = context.createRadialGradient(canvas.width/2, canvas.height, 10,
                                            canvas.width/2, 0, 100);

    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(0.25, 'white');
    gradient.addColorStop(0.5, 'purple');
    gradient.addColorStop(0.75, 'red');
    gradient.addColorStop(1.0, 'yellow');

    context.fillStyle = gradient;

    // 圈出矩形路径区域后，按渐变风格进行填充
    context.rect(0,0,canvas.width,canvas.height);

    context.fill();







