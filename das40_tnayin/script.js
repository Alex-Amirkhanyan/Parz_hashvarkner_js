//ARAJADRANQ ARAJIN
// let a = +prompt("Arajin tiv")
// let b = +prompt("Erkrord tiv")
// gorcoxutyun(a,b)

// function gorcoxutyun(arg1,arg2,sum = 0) {
//     if(arg1 == arg2) {
//         console.log(sum)
//     }
//     arg1++
//     sum += arg1
//     gorcoxutyun(arg1,arg2,sum)
// }



//ARAJADRANQ ERKRORD(ARAJIN DZEVOV)

// let a = +prompt("Arajin tiv")
// let b = +prompt("Erkrord tiv")
// action(a,b)

// function action(arg1,arg2) {
//     if(arg1 > arg2) {
//         let aa = confirm("Cankanum eq texer@ poxel?")
//         if(aa === true) {
//             action_changed(arg1,arg2)
//         }else {
//             action_minus(arg1,arg2)
//         }
//     }
// }
// function action_changed(ac_1,ac_2,sum1 = 0) {
//     if(ac_2 == ac_1) {
//         console.log(sum1)
//     }
//     ac_2++
//     sum1 += ac_2
//     action_changed(ac_1,ac_2,sum1)
// }
// function action_minus(am_1,am_2,sum2 = 0) {
//     if(am_1 == am_2) {
//         console.log(sum2)
//     }
//     am_1--
//     sum2 -= am_1
//     action_minus(am_1,am_2,sum2)
// }




//ARAJADRANQ ERKRORD(ERKRORD DZEVOV)

// let a = +prompt("Arajin tiv")
// let b = +prompt("Erkrord tiv")
// action(a,b)

// function action(arg1,arg2) {
//     if(arg1 > arg2) {
//         let aa = confirm("Cankanum eq texer@ poxel?")
//         if(aa === true) {
//             action_changed(arg1,arg2)
//         }else {
//             action_minus(arg1,arg2)
//         }
//     }
// }
// function action_changed(ac_1,ac_2,sum1 = 0) {
//     if(ac_1 == ac_2) {
//         console.log(sum1)
//     }
//     ac_1 = ac_1 + ac_2
//     ac_2 = ac_1 - ac_2
//     ac_1 = ac_1 - ac_2
//     ac_1++
//     sum1 += ac_1
//     action_changed(ac_2,ac_1,sum1)
// }
// function action_minus(am_1,am_2,sum2 = 0) {
//     if(am_1 == am_2) {
//         console.log(sum2)
//     }
//     am_1--
//     sum2 -= am_1
//     action_minus(am_1,am_2,sum2)
// }




//ERRORD ARAJADRANQ
// let a = 64;
// let b = 178;
// let aa = [];
// let bb = [];

// actions(a,b)
// function actions(arg1,arg2) {
//     for (let i = arg1; i <= arg2; i++) {
//         if(i % 2 == 0) {
//             aa.push(i)
//         }else {
//             bb.push(i)
//         }
//     }
// }
// console.log(aa,bb)




//ERRORD ARAJADRANQ(ERKRORD DZEVOV)

let a = 64;
let b = 178;
let aa = [];
let bb = [];

changer(a,b)
function changer(arg1,arg2) {
    if(arg1 == arg2) {
        return "avart"
    }
    arg1++
    if(arg1 % 2 == 0) {
        aa.push(arg1)
    }else{
        bb.push(arg1)
    }
    changer(arg1,arg2)
}
console.log(aa,bb)




//CHORRORD ARAJADRANQ

let arr = "Գրիգոր՝ 1254-5687-4559-0015, Մարիամ՝ 1120-4475-5559-1566, Արմեն՝ 7855-2114-3354-5641"
let a = arr.filter(newa => newa <= 9)
console.log(a)