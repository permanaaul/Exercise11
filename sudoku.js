var arraySudoku = [
   //0  1  2  3  4  5  6  7  8
    [1, 0, 0, 0, 0, 0, 0, 4, 0], // 0
    [0, 2, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 3, 0, 0, 0, 5, 1, 0], // 2
    [0, 0, 0, 4, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 5, 0, 0, 0, 0], // 4
    [0, 1, 0, 3, 0, 6, 0, 0, 0], // 5
    [0, 0, 2, 0, 0, 0, 7, 0, 0], // 6
    [0, 0, 0, 0, 0, 0, 0, 8, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 9]  // 8
];

function Sudoku(sudoku, [x, y], value) {
    // Check jika value sudah ada di barisan
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[y][i] == value) {
            return false;
        }
    }
    // Check jika value sudah ada di kolom
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[i][x] == value) {
            return false;
        }
    }
    // Check jika value sudah ada  3x3
    let startRow = Math.floor(y / 3) * 3; // membagi indeks baris y dengan 3 untuk mendapatkan indeks
    let startCol = Math.floor(x / 3) * 3; // membagi indeks kolom x dengan 3 untuk mendapatkan indeks
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (sudoku[i][j] == value) {
                return false;
            }
        }
    }
    return true;
}
console.log(Sudoku(arraySudoku, [5, 7], 7)); 
