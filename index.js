
window.addEventListener('load', ()=>{

    resize();
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);

});
    
const canvas = document.querySelector('#canvas');


const canvasSecond = document.querySelector('#canvas1');



const ctx = canvas.getContext('2d');
const ctx1 = canvasSecond.getContext('2d');

const clearCanvas = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clearCanvasSecond = function (){
    ctx1.clearRect(0, 0, canvasSecond.width, canvasSecond.height);
}

function resize(){
  ctx.canvas.width = 500;
  ctx.canvas.height = 500;
  ctx1.canvas.width = 28;
  ctx1.canvas.height = 28;
}

let coord = {x:0 , y:0};
let coord1 = {x:0, y:0};
   

let paint = false;

function getPosition(event){
  coord.x = event.pageX - canvas.offsetLeft;
  coord.y = event.pageY - canvas.offsetTop;
  coord1.x = event.pageX - canvasSecond.offsetLeft;
  coord1.y = event.pageY - canvasSecond.offsetTop;
}

function startPainting(event){
  paint = true;
  getPosition(event);
}
function stopPainting(){
  paint = false;
}
    
function sketch(event){
  if (!paint) return;
  ctx.beginPath();
  ctx1.beginPath();
    
  ctx.lineWidth = 15;
  ctx1.lineWidth = 3;

  ctx.lineCap = 'round';
  ctx1.lineCap = 'round';
    
  ctx.strokeStyle = 'black';
  ctx1.strokeStyle = 'black';

  ctx.moveTo(coord.x, coord.y);
  ctx1.moveTo(coord1.x, coord1.y);

  getPosition(event);
   
  ctx.lineTo(coord.x , coord.y);
  ctx1.lineTo(coord1.x , coord1.y);

  ctx.stroke();
  ctx1.stroke();
}