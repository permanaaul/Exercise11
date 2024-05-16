function jumlahkanMatriks(arr, arr2) {
    // Pastikan matriks arr dan arr2 memiliki ukuran yang sama
    if (arr.length !== arr2.length || arr[0].length !== arr2[0].length) {
        throw new Error("Matriks harus memiliki ukuran yang sama");
    }

    // Inisialisasi matriks result dengan ukuran yang sama
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            result[i][j] = arr[i][j] + arr2[i][j];
        }
    }

    return result;
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let result = jumlahkanMatriks(arr, arr2);
console.log(arr)
console.log(arr2)
console.log("")
console.log(result);
