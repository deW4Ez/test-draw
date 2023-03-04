
window.addEventListener('load', ()=>{

    resize();
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);

});
    
const canvas = document.querySelector('#canvas');
const container = document.querySelector("#container");
const button = document.querySelector("#buttonClear");


const ctx = canvas.getContext('2d');

const clearCanvas = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
}

function resize(){
  ctx.canvas.width = 500;
  ctx.canvas.height = 500;
}

let coord = {x:0 , y:0}; 
   

let paint = false;

function getPosition(event){
  coord.x = event.pageX - canvas.offsetLeft;
  coord.y = event.pageY - canvas.offsetTop;
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
    
  ctx.lineWidth = 15;

  ctx.lineCap = 'round';
    
  ctx.strokeStyle = 'black';

  ctx.moveTo(coord.x, coord.y);

  getPosition(event);
   
  ctx.lineTo(coord.x , coord.y);

  ctx.stroke();
}