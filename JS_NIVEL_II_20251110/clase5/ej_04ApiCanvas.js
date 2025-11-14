const miCanvas = document.getElementById('lienzo');
console.log(miCanvas);

const ctx = miCanvas.getContext("2d");
console.log(ctx);

const colores = ['blue','yellow','red','purple','orange','green'];

let x = 0;
let y = 0;
for (let index = 0; index < colores.length; index++) {
    ctx.fillStyle = colores[index];
    ctx.fillRect(x,y,100,100);
    x += 100;
    y += 100;
}

