//Create figures
export default function createElement(rows, cols, grid, pattern) {
    let cell = '';
    let l = 0
    let k = 0
    for (let i = rows /2 ; i != rows/2+5 ; i++) {
        for (let j = cols -5 ; j != cols ; j++) {
            let test = new Array(l, k)
            pattern.forEach(element => {
                if (element[0] == k && element[1] == l) {
                    cell = document.getElementById(i + "_" + j);
                    cell.setAttribute("class", "live");
                    grid[i][j] = 1;
                }
            });
            l++
        }
        l = 0
        k++
    }

}