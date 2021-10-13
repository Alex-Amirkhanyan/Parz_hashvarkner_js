function first() {
    let message = "Chisht e"
    alert(message)
}
function second() {
    alert("sxal e")
}

let aa = prompt("Login")
let bb = prompt("Password")

function action(arg, arg2) {
    let a = "Admin"
    let b = "12345"
    if(aa == a && bb == b) {
        first()
    }else {
        second()
    }
}
action()