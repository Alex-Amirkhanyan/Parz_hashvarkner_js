// let a = [1,"a",2,"b",3,"c",4,"d"]

// function errors(arg) {
//     return alert(arg)
// }
// function input() {
//     let b = +prompt("Number")
//     let c = prompt("The letter")
//     check_inp(b,c)
// }
// input()
// function check_inp(ch_1,ch_2) {
//     if(!isNaN(ch_1) && isNaN(ch_2)) {
//         return  action(ch_1,ch_2)
//     }else {
//         return errors("Duq tvyalneri texer@ xarnel eq")
//     }
// }
// function action(arg1,arg2) {
//     if(arg1 === a[0] && arg2 === a[1]) {
//         alert("Chisht e")
//     }else if(arg1 === a[2] && arg2 === a[3]) {
//         alert("Chisht e")
//     }else if(arg1 === a[4] && arg2 === a[5]) {
//         alert("Chisht e")
//     }else if(arg1 === a[6] && arg2 === a[7]) {
//         alert("Chisht e")
//     }else {
//         errors("Sxal e")
//     }
// }


let a = [1,"a",2,"b",3,"c",4,"d"]

function errors(arg) {
    return alert(arg)
}
function inputs() {
    let b = +prompt("Number")
    let c = prompt("The letter")
    check_inp(b,c)
}
inputs()
function check_inp(arg1,arg2) {
    if(!isNaN(arg1) && isNaN(arg2)) {
        return  actions(arg1,arg2)
    }else {
        return errors("Duq tvyalneri texer@ xarnel eq")
    }
}
function actions(ac_1,ac_2) {
    let d = a.indexOf(ac_1)
    let e = a.indexOf(ac_1)+1
    if(ac_1 === a[d] && ac_2 === a[e]) {
        alert("Chisht e")
    }else {
        return errors("Sxal e")
    }
}


// let a = [1,"a",2,"b",3,"c",4,"d"]

// function ac_error(arg) {
//     return alert(arg)
// }
// function inPuts() {
//     let a = +prompt("Number")
//     let b = prompt("The letter")
//     check_data(a,b)
// }
// inPuts()
// function check_data(arg1,arg2) {
//     if(!isNaN(arg1) && isNaN(arg2)) {
//         return solving(arg1,arg2)
//     }else {
//         return ac_error("Duq tvyalneri texer@ xarnel eq")
//     }
// }
// function solving(sv_1,sv_2) {
//     let sv_f = a.filter(function(i){
//         return i == a.indexOf(sv_1);
//     })
//     if(a.indexOf(sv_1) === a.indexOf(sv_f[0]) && a.indexOf(sv_2) === a.indexOf(sv_f[0])+1) {
//         alert("Chisht e")
//     }else {
//         ac_error("Sxal e")
//     }
// }