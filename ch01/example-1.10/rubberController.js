function rubberbandStart(x,y){

}

// Event handlers

canvas.onmousedown = function(e){
  var x = e.clientX;
  var y = e.clientY;

  e.preventDefault();
  rubberbandStart(x,y);
};
