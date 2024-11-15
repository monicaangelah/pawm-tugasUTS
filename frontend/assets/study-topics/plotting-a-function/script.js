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
    const plotPoints = [];
    ctx.beginPath();
    ctx.strokeStyle = 'blue';

    for (let x = -canvas.width / 2; x <= canvas.width / 2; x++) {
        const canvasX = x + canvas.width / 2;
        const y = parsedFunc(x / 20); // Skalakan input
        const canvasY = canvas.height / 2 - y * 20; // Skalakan output
        plotPoints.push({ x: x / 20, y: y }); // Simpan titik untuk disimpan di backend

        if (x === -canvas.width / 2) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }

    ctx.stroke();

    // Simpan hasil simulasi
    const inputData = { function: funcInput };
    simpanHasilSimulasi('plotting-a-function', inputData, plotPoints);
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

function simpanHasilSimulasi(topic, inputData, resultData) {
    const token = localStorage.getItem('token');
    console.log('Token yang digunakan:', token); // Periksa apakah token valid

    // Log data yang akan dikirim ke console
    console.log("Data yang akan dikirim:", JSON.stringify({
        type: topic,
        data: {
            inputData,
            resultData
        }
    }, null, 2)); // Menggunakan `null, 2` untuk format JSON yang lebih mudah dibaca

    fetch('http://localhost:3000/api/simulations/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            type: topic, // Menambahkan type
            data: {       // Membungkus inputData dan resultData di dalam data
                inputData,
                resultData
            }
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                console.error("Error response from server:", err);
                throw new Error('Gagal menyimpan hasil simulasi.');
            });
        }
        return response.json();
    })
    .then(data => console.log('Hasil simulasi tersimpan:', data))
    .catch(error => console.error('Gagal menyimpan hasil simulasi:', error));
}