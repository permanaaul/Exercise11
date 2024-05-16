// Convert Excel
function excel(colum){
    let num = 0
    for( let i = 0; i < colum.length; i++){
        num *= 26
        num += colum.charCodeAt(i) - "A".charCodeAt(0) + 1
    }
    return num
}

console.log(excel("A"))
console.log(excel("B"))
console.log(excel("Z"))
console.log(excel("AA"))
console.log(excel("AB"))
console.log(excel("EF"))
console.log("=============")


// Given a non-empty array of integers nums
function singleNum(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count === 1) {
            return nums[i];
        }
    }
    return -1; 
}
console.log(singleNum([2, 2, 1])); 
console.log(singleNum([4, 1, 2, 1, 2])); 
console.log(singleNum([1])); 
console.log("=============")

// anagram
function anagram(s, t){
    // jika panjang kedua string tidak sama, maka bukan anagram
    if(s.length !== t.length){
        return false
    }
    const sortedS = s.split('').sort().join('');
    // metode split untuk memecah string menjadi array 
    // sort untuk mengurutkan array
    // join untuk menggabungkan kembali menjadi string
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT
}
console.log(anagram("anagram", "nagaram"))
console.log(anagram("rat", "car"))
console.log(anagram("IAM LORD VOLDEMORT", "TOM MARVOLO RIDDLE"))
console.log("=============")

// Staircase
function Staircase(n){
    if(n <=2){
        // jika 1 ya 1, 2 ya 2 
        return n
    }
    // menyimpan langkah
    let first = 1
    // langkah pertama
    let second = 2
    // langkah kedua

    for(i = 3; i <= n; i++){
        let third = first + second // dijumlahkan untuk 2 langkah sebelumnya
        console.log(`${first} + ${second} = ${third}`)
        first = second
        second = third
    }

    return second
}
console.log(Staircase(2))
console.log(Staircase(3))
console.log(Staircase(4))
console.log(Staircase(5))
console.log(Staircase(6))
console.log(Staircase(11))
console.log("=============")

