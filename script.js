let canvas = document.querySelector("#canvas");
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
   
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(120, 120, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;

for (let i = 0; i < 8; i++) {
    let angle = (i / 8) * Math.PI * 2;
    let x = 120 + Math.cos(angle) * 110;
    let y = 120 + Math.sin(angle) * 110;

    ctx.beginPath();
    ctx.moveTo(120, 120);
    ctx.lineTo(x, y);
    ctx.stroke();
}

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(280, 70, 30, 0, 2 * Math.PI);
ctx.arc(330, 70, 40, 0, 2 * Math.PI);
ctx.arc(380, 70, 35, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(470, 120, 30, 0, 2 * Math.PI);
ctx.arc(520, 120, 40, 0, 2 * Math.PI);
ctx.arc(570, 120, 35, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(650, 70, 30, 0, 2 * Math.PI);
ctx.arc(700, 70, 40, 0, 2 * Math.PI);
ctx.arc(750, 70, 35, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "red";
ctx.fillRect(280, 250, 200, 200);
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(280, 250);
ctx.lineTo(380, 150);
ctx.lineTo(480, 250);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "silver";
ctx.fillRect(290, 330, 50, 50);
ctx.fillRect(420, 330, 50, 50);

ctx.strokeStyle = "black";
ctx.lineWidth = 3;

for (let i = 0; i < 6; i++) {
    let y = 300 + i * 30;
    let x1 = 0;
    let x2 = 280;

    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.stroke();
}

for (let i = 0; i < 6; i++) {
    let y = 300 + i * 30;
    let x1 = 480;
    let x2 = 800;

    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.stroke();
}

ctx.fillStyle = "green";
ctx.fillRect(0, 450, canvas.width, canvas.height - 450);
}

let canvas2 = document.querySelector('#canvas2');
let context = canvas2.getContext('2d');

context.beginPath();
context.moveTo(100, 300);   
context.lineTo(500, 300);   
context.lineTo(400, 400);   
context.lineTo(200, 400);   
context.closePath();
context.fillStyle = 'green';
context.fill();

context.beginPath();
context.moveTo(190, 300);   
context.lineTo(300, 100);   
context.lineTo(400, 300);   
context.closePath();
context.fillStyle = 'red';
context.fill();

context.beginPath();
context.moveTo(340, 60);    
context.lineTo(520, 60);   
context.lineTo(520, 110); 
context.lineTo(340, 110);  
context.closePath();
context.fillStyle = 'blue';
context.fill();

context.beginPath();
context.moveTo(420, 85);    
context.lineTo(520, 60);    
context.lineTo(520, 110);    
context.closePath();
context.fillStyle = '#00adff';
context.fill();

let canvas3 = document.querySelector('#canvas3');
let smile = canvas3.getContext('2d');

smile.beginPath();
smile.arc(200, 200, 150, 0, Math.PI * 2);
smile.fillStyle = 'yellow';
smile.fill();
smile.strokeStyle = 'black';
smile.lineWidth = 5;
smile.stroke();

smile.beginPath();
smile.arc(150, 150, 30, 0, Math.PI * 2);
smile.fillStyle = 'black';
smile.fill();

smile.beginPath();
smile.arc(250, 150, 30, 0, Math.PI * 2);
smile.fillStyle = 'black';
smile.fill();

smile.beginPath();
smile.arc(200, 210, 80, 0.2 * Math.PI, 0.8 * Math.PI);
smile.lineWidth = 10;
smile.stroke();