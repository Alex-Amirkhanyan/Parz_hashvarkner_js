// function action(arg, sum) {
//     arg = arg.reverse()
//     arg[arg.length] = sum;
//     arg = arg.reverse()
//     return arg
// }

// let arr = [1, 2, 3, 4, 5]
// console.log(action(arr, 77))



// function rev_without(arg,sum = 0) {
//     while(arg[sum] !== undefined) {
//         arr2.push(arg.pop(arg[sum]))
//     }
//     sum++
//     return arr2
// }

// let arr = [1, 2, 3, 4, 5]
// let arr2 = []
// console.log(rev_without(arr))





function change_arr(arg) {  
    let done = false;
    while(!done) {
        done = true
        for(let i = 1; i < arg.length; i++) {``
            if(arg[i - 1] > arg[i]) {
                done = false
                let tmp = arg[i - 1];
                arg[i - 1] = arg[i]
                arg[i] = tmp
            }
        }
    }
    return arg
}

let arr = [12, 3, 57, 1, 0, 69, 420, 7, 98]
console.log(change_arr(arr))