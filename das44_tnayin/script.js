//Arajadranq arajin

// let arr = [45, 12, 24, 13, 3, 6, 17, 0]
// let arr_kent = []
// let arr_zuyg = []

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         arr_zuyg.push(arr[i])
//     }else {
//         arr_kent.push(arr[i])
//     }
// }
// console.log(arr_zuyg)
// console.log(arr_kent)




//Erkrord arajadranq

// let arr = [45, 12, 24, 13, 3, 6, 17, 0]
// let a = 0

// loop : for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         continue loop
//     }else {
//         a += arr[i]
//     }
// }
// console.log(a)



//Errord arajadrnaq - clone chenq ancel





//Chorrord arajadrnaq - clone chenq ancel

// let a = [7, 8, 2, 15, 69, 420, 3];
// let b = [7, 2, 2, 15, 73, 420, 2];
// let d = [];

// for (let i = 0; i < b.length; i++) {
//     let c = a.length;
//     for (let j = 0; j < c; j++) {
//         if (b[i] == a[j]) {
//             d.push(b[i])
//         }
//     }
// }
// console.log(d)





//Hingerord arajadranq 

// let arr = ["Palit", "Geforce", "RTX", 3060,]
// let b = arr.join(" ")
// console.log(b)





//Vecerord arajadranq 

// let arr = ["First", "Second", "Third", "Fourth"]
// let arr2 = "Second";

// console.log(arr.map(newa => newa === arr2))





//Yoterord arajadranq

// let arr = ["First", "Second", "Third", "Fourth"]
// let arr2 = "Second";

// console.log(arr.indexOf(arr2))


//Uterord arajdranq chenq ancel 
//Innerord arajadranq chenq ancel


//Taserord arajadranq

// let arr = [1, 2, 3, 4, 5].reverse()
// console.log(arr)



//11rd arajadranq- object chenq ancel



//12rd arajadranq

// let a = "Geforce RTX"
// console.log(a.split("").reverse().join(""))




//Arajin arajadranq

// let a = [12, 35, 64, 7]
// let b = 0

// while(b < a.length) {
//     b++
// }
// console.log(b)



//Arajin arajadranq 2rd dzevov 

// let a = [12, 35, 64, 7]

// function arrayLength(a){
//     let length = 0;
//     while(a[length]!==undefined){
//       length++;
//     }
//     return length;
// }  
// console.log(arrayLength(a));

//Erkrord arajadranq

// let a = [12, 1, 4]
// let b = 0

// for (let i = 0; i < a.length; i++) {
//     b += a[i]
// }
// console.log(b)


//errord arajadranq

// let a = [10, 100, 20];
// let b = [];

// for (let i = a[0]; i < a[1]; i += a[2]) {
//     b.push(i)
// }
// console.log(b)




//chorrord arajadranq

// let arr = [1, 10, 2, 2, 3, 85]
// console.log(Math.max(...arr))



// Hingerord arajadranq

// let a = ["Hello" , "," , " ", "world"]
// let b = a.join("")

// console.log(b);



//Vecerord arajadranq

// let a = [3, 7, 12, 5, 20, 0]
// let b = a.length - 1
// let c = []

// for(let i = 0; i < b; i++) {
//     let d = a.indexOf(a[i])+1
//     c.push(a[i] * a[d])
// }
// console.log(c)


//Yoterrord arajadrana

// function act_del_duplicates(arr, n)
// {
//     if (n==0 || n==1)
//         return n;
 
//     let temp = new Array(n);

//     let j = 0;
//     for (let i=0; i<n-1; i++)
 
//         if (arr[i] != arr[i+1])
//             temp[j++] = arr[i];

//     temp[j++] = arr[n-1];

//     for (let i=0; i<j; i++)
//         arr[i] = temp[i];
 
//     return j;
// }
 
// let arr = [1, 2, 2, 3, 3, 4]
// let arr2 = []
// let n = arr.length;
// n = act_del_duplicates(arr, n);
 
// for (let i=0; i<n; i++)
// arr2.push(arr[i])
// console.log(arr2);




//Uterrord pahanj@ vonc chjoka tenc el chem jokel


//Arajin arajadranq

// let arr = [1, -1, 35]
// let a = arr.length
// let b = 0

// function action(sum = 0) {
//     if(sum == a) {
//         return "avart"
//     }
//     sum++
//     b += arr.pop()
//     action(sum)
// }
// action()
// console.log(b)




//Arajin arajadranq

// let arr = [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]


// function mode(arr2){
//     return arr2.sort((a,b) =>
//           arr2.filter(aa => aa===a).length
//         - arr2.filter(aa => aa===b).length
//     ).pop();
// }
// console.log(mode(arr))




//Arajin arajadrnaq

// let arr = [3, 78, 'n', 0, 1]
// let arr2 = [];

// function action(sum = 0) {
//     if(sum == 1) {
//         return "avart"
//     }
//     sum++
//     arr2 = arr.splice(0, 1)
//     action(sum)
// }
// action()
// console.log(arr)




//Arajin arajadranq

// let arr = [1, [3, 4, [1, 2]], 10]
// let a = arr.length

// function action(sum = 0) {
//     if(sum == a) {
//         return "avart"
//     }
//     sum++
//     arr = arr.flat()
//     action(sum)
// }
// action()
// console.log(arr)



//Arajin arajadranq

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"]
// let N = 3
// let N2 = arr.length

// function action(sum = N) {
//     if(sum == N2) {
//         return "avart"
//     }
//     sum++
//     arr.unshift(arr.pop())
//     action(sum)
// }
// action()
// console.log(arr)