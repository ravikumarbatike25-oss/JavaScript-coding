let num = [
    [1, 2, 3],
    [10, 20, 30],
    [100, 200, 300],
    [11, 22, 33]
];

// 3x4 matrix: 4 rows, 3 columns

// console.log(num[0][0]); // 1
// console.log(num[2][2]); // 300
// console.log(num[3][1]); // 22


// Normal loop
// for (let i = 0; i < num.length; i++) { // row
//     for (let j = 0; j < num[i].length; j++) { // column
//         console.log(num[i][j]); // 1 2 3 10 20 30 100 200 300 11 22 33
//     }
// }

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        process.stdout.write(`${num[i][j]} `); // 1 2 3 10 20 30 100 200 300 11 22 33
    }
    console.log(); // Move to next line
}

console.log(num);


//Jagged Array
//Java wont allow jagged array but javascript does.
let marks = [
    [1, 2, 3],
    [10],
    [23, 44, 55, 67],
    [90, 80]
];

for (let i = 0; i < marks.length; i++) {
    for (let j = 0; j < marks[i].length; j++) {
        process.stdout.write(`${marks[i][j]} `);
    }
    console.log();
}