const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

// Set ukuran canvas
canvas.width = 600;
canvas.height = 400;

// Fungsi untuk menggambar grafik
function plotGraph() {
    const funcInput = document.getElementById('functionInput').value;
    const parsedFunc = new Function('x', `return ${funcInput};`);

    // Reset canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar sumbu X dan Y
    drawAxes();

    // Gambar grafik fungsi
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    for (let x = -canvas.width / 2; x <= canvas.width / 2; x++) {
        const canvasX = x + canvas.width / 2;
        const y = parsedFunc(x / 20); // Skalakan input
        const canvasY = canvas.height / 2 - y * 20; // Skalakan output

        if (x === -canvas.width / 2) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }

    ctx.stroke();
}

// Fungsi untuk menggambar sumbu X dan Y
function drawAxes() {
    ctx.beginPath();
    ctx.strokeStyle = 'black';

    // Sumbu X
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    // Sumbu Y
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
}
