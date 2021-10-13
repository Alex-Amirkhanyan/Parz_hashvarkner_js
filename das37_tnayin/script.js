// let a = [7, 8, 2, 15, 69, 420, 3];
// let b = [7, 2, 5, 15, 3, 420, 2];
// let c = [];

// for (let i = 0; i < a.length; i++) {
//     if(a[i] !== b[i]) {
//         c.push(a[i],b[i])
//     }
// }
// console.log(c)


// let a = [7, 8, 2, 15, 69, 420, 3];
// let b = [7, 2, 2, 15, 73, 420, 2];
// let c = [];

// function result(arr1,arr2) {
//     for (let i = 0; i < a.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             c.push(arr1[i],arr2[i])
//         }
//     }
// }
// result(a,b)
// console.log(c) 


let a = [7, 8, 2, 15, 69, 420, 3];
let b = [7, 2, 2, 15, 73, 420, 2];

for (let i = 0; i < b.length; i++) {
    let c = a.length;
    for (let j = 0; j < c; j++) {
        if (b[i] == a[j]) {
            a = a.slice(0, j).concat(a.slice(j+1, c));
            b = b.slice(0, j).concat(b.slice(j+1, c));
        }
    }
}
console.log(a.concat(b))