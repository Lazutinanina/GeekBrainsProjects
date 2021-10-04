/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild) */

const rows = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];
const cols = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];

 let body = document.getElementsByTagName('body')[0]; //поиск тега body(0), взять только боди поэтому 0
let table = document.createElement('table'); // создание тега table
for (i=0; i < rows.length; i++) {
    let row = document.createElement("tr");
    for (j=0; j < cols.length; j++) {
        let cell = document.createElement("td");
        if (rows[i] == '' && cols[j] != '') { 
            let celltext = document.createTextNode(cols[j]);
            cell.appendChild(celltext);
        } else if (cols[j] == '' && rows[i] != '') {
            let celltext = document.createTextNode(rows[i]);
            cell.appendChild(celltext);

        }
        if (isBlackCell(i,j)) { //вызов функции
            cell.setAttribute("style", "background-color: black;");
        }

        row.appendChild(cell); // добавление ячейки в конец строки
    }
    table.appendChild(row);
}
body.appendChild(table);

function isBlackCell (RowNum,CollNum) {
    if (RowNum == 0 || CollNum == 0 || RowNum == 9 || CollNum == 9) {
        return false;
      } 
      if ((RowNum % 2  == 0 && CollNum % 2 == 1) || (RowNum % 2  == 1 && CollNum % 2 == 0)) {
          return true;
      }
}