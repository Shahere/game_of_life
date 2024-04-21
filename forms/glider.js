//Create figures
export default function createGlider(rows, cols, grid) {
    let cell = '';
    for (let i = rows - 3; i != rows; i++) {
        for (let j = 0; j != 3; j++) {
            if (i == rows - 3) {
                cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
            if (i == rows - 2 && j == 2) {
                cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
            if (i == rows - 1 && j == 1) {
                cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
        }
    }

}