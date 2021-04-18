export function drawLine(data){
    const {ctx, x1, x2, y1, y2, color} = data;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    
    ctx.moveTo(x1 + 350, y1 + 350);
    ctx.lineTo(x2 + 350, y2 + 350);
    
    ctx.stroke();
}

export function drawCircle(ctx){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 0, 0)"
    ctx.arc(350, 350, 300, 0, Math.PI * 2);
    ctx.stroke();
}

export function drawTriangle(ctx){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 0, 0)"
    ctx.moveTo(350, 50);
    ctx.lineTo(350 - 150 * Math.sqrt(3), 500);
    ctx.lineTo(350 + 150 * Math.sqrt(3), 500);
    ctx.closePath();
    ctx.stroke();
}