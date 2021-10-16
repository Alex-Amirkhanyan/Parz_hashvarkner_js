// document.write("<table border='1' width='50%'")
// for(let i = 0; i < 8; i++) {
//     document.write("<tr>")
//     for(let j = 0; j < 8; j++) {
//         if(i % 2 == j % 2) {
//             document.write("<td style='width:80px;height:80px;background:black'>")
//             document.write("</td>")
//         }else {
//             document.write("<td>")
//             document.write("</td style='width:80px;height:80px;'>")
//         }
//     }
//     document.write("</tr>")
// }
// document.write("</table>")

//97-122    

// let a = ["Levon", "levnaM", "Hayko", "xelA"]
// let b = []

// a.map(function(newa) {
//     if(newa.charCodeAt(newa.length-1) >= 65 && newa.charCodeAt(newa.length-1) <= 90) {
//         b.push(newa.split("").reverse().join(""))
//     }else {
//         b.push(newa)
//     }
// })
// console.log(b)


// let arr = ["Levon", "levnaM", "Hayko", "xelA"]
// let arr2 = []

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i][0] === arr[i][0].toUpperCase()) {
//         arr2.push(arr[i])
//     }else{
//         arr2.push(arr[i].split("").reverse().join(""))
//     }
// }
// console.log(arr2)



// for(let i = 1; i <= 9; i++) {
//     for(let j = 1; j <= 9; j++) {
//         let b = i * j
//         document.write(i + "x" + j + "=" + b + "<br>")
//     }
// }


// let arr = ["Levon", "levnaM", "Hayko", "xelA"]

// action : for(let i = 0; i < arr.length; i++) {
//     if(arr[i][0] === arr[i][0].toUpperCase()) {
//         continue action
//     }else{
//         arr[i] = arr[i].split("").reverse().join("")
//     }
// }
// console.log(arr)
