let arr = [1, 2, 3, 4, 5]

function reverse_arr() {
    let output = [];
    while(arr.length) {
        output.push(arr.pop())
    }
    return output
}
console.log(reverse_arr())