//Create figures
export default function createElement(rows, cols, grid, pattern, start = [0, 0]) {
    let maxLong = 0
    let maxLarg = 0
    pattern.forEach(element => {
        let i = 0
        element.forEach(long => {
            if (i == 0) {
                if (long > maxLong) {
                    maxLong = long
                }
            } else {
                if (long > maxLarg) {
                    maxLarg = long
                }
            }
            i++
        })
    });
    if (maxLarg+1 > rows - start[0] || maxLong+1 > cols - start[1]) {
        console.log("IMPOSSINLE A PLACER")
    }


    let cell = '';
    let l = 0
    let k = 0
    for (let i = start[0]; i != start[0] + maxLong+1; i++) {
        for (let j = start[1]; j != start[1] + maxLarg+1; j++) {
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