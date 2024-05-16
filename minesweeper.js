var minesweeperArray = [
    // 0   1   2   3   4   5   6   7   8   9
    ["O","X","O","O","O","X","O","O","O","O"], // 0
    ["O","O","O","X","O","O","O","X","O","O"], // 1
    ["O","O","O","X","O","O","X","X","O","O"], // 2
    ["O","O","O","O","X","O","O","O","O","O"], // 3
    ["O","O","X","O","O","X","O","O","X","O"], // 4
    ["O","O","O","X","O","O","X","O","O","O"], // 5
    ["O","X","X","O","X","O","O","O","O","O"], // 6
    ["O","O","O","O","O","X","O","O","O","O"], // 7
    ["O","X","O","X","O","O","X","O","O","O"], // 8
    ["O","O","O","O","O","O","O","O","O","O"]  // 9
];

function countBombsAround(x, y) {
    var bombCounter = 0;

    // Iterasi melalui grid 3x3 yang berpusat di (x, y)
    for (var i = y - 1; i <= y + 1; i++) {
        for (var j = x - 1; j <= x + 1; j++) {
            // Periksa jika koordinat berada dalam batas array
            if (i >= 0 && i < minesweeperArray.length && j >= 0 && j < minesweeperArray[0].length) {
                if (minesweeperArray[i][j] == "X") {
                    bombCounter++;
                }
            }
        }
    }

    return bombCounter;
}

function fillMinesweeperArray() {
    for (var y = 0; y < minesweeperArray.length; y++) {
        for (var x = 0; x < minesweeperArray[y].length; x++) {
            if (minesweeperArray[y][x] === "O") {
                var bombsAround = countBombsAround(x, y);
                minesweeperArray[y][x] = bombsAround.toString();
            }
        }
    }
}
fillMinesweeperArray();

console.table(minesweeperArray);
