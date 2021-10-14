let table = document.createElement("table");
table.className = "taxtak"

for (let i = 1; i < 9; i++) {
    let tr = document.createElement('tr');
    for (let j = 1; j < 9; j++) {
        let td = document.createElement('td');
        if (i % 2 == j % 2) {
            td.className = "kent";
        } else {
            td.className = "zuyg";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);