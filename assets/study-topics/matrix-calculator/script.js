function generateMatrixInputs() {
    const size = parseInt(document.getElementById('matrixSize').value);
    createMatrixInputs('matrixA', size);
    createMatrixInputs('matrixB', size);

    // Atur jarak dan ukuran kontainer secara dinamis
    const matrixContainer = document.querySelector('.matrix-container');
    const container = document.querySelector('.container');

    if (size === 3) {
        matrixContainer.classList.add('larger-gap');
        container.classList.add('larger-container');
    } else {
        matrixContainer.classList.remove('larger-gap');
        container.classList.remove('larger-container');
    }
}

function createMatrixInputs(matrixId, size) {
    const matrixDiv = document.getElementById(matrixId);
    matrixDiv.innerHTML = ''; // Hapus input sebelumnya

    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `${matrixId}_${i}${j}`;
            grid.appendChild(input);
        }
    }

    matrixDiv.appendChild(grid);
}

function tambahMatriks() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const result = calculateMatrix(size, (a, b) => a + b);
    tampilkanHasil(result);
}

function kaliMatriks() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const result = Array.from({ length: size }, () => Array(size).fill(0));

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                result[i][j] += getInputValue('matrixA', i, k) * getInputValue('matrixB', k, j);
            }
        }
    }

    tampilkanHasil(result);
}

function calculateMatrix(size, operation) {
    const result = Array.from({ length: size }, () => Array(size).fill(0));

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const a = getInputValue('matrixA', i, j);
            const b = getInputValue('matrixB', i, j);
            result[i][j] = operation(a, b);
        }
    }

    return result;
}

function getInputValue(matrixId, i, j) {
    return parseFloat(document.getElementById(`${matrixId}_${i}${j}`).value) || 0;
}

function tampilkanHasil(result) {
    const hasilDiv = document.getElementById('hasil');
    let html = '<h3>Hasil:</h3><p>';

    result.forEach(row => {
        html += `[ ${row.join(' ')} ]<br/>`;
    });

    html += '</p>';
    hasilDiv.innerHTML = html;
}

// Generate default matrix inputs on load
generateMatrixInputs();
