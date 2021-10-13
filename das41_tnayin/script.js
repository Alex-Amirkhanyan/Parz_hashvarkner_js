const log = "Admin"
const pass = "123456"

function check_log(sum = 0) {
    let a = prompt("Login@")
    if(a === log) {
        check_psw()
    }else {
        if(sum === 4) {
            sum = 0
            return alert("Duq ogtater cheq!")
        }
        else {
            sum++
            return check_log(sum)
        }
    }
}
check_log()
function check_psw(sum2 = 0) {
    let b = prompt("Parol@")
    if(b === pass) {
        alert("Duq ogtater eq")
    }else {
        if(sum2 === 4) {
            sum2 = 0
            return alert("Shnorhavor duq podzemki xaker eq!")
        }
        else {
            sum2++
            return check_psw(sum2)
        }
    }
}