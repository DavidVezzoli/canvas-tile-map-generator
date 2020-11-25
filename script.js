const wdt = document.getElementById("tileContainer").offsetWidth
const hgt = document.getElementById("tileContainer").offsetHeight
const tWdt = 40;
const tHgt = 40;
const tX = wdt / tWdt
const tY = hgt / tHgt

let outputArray = []

for (let x = 0; x < tX; x++) {
    for (let y = 0; y < tY; y++) {
        let tile = document.createElement("div");
        tile.classList.add("tile")
        tile.addEventListener('click', () => {
            tile.classList.toggle("tileOn");
        })

        document.getElementById("tileContainer").appendChild(tile)
    }
}

function generateArray() {

    let count = 0;
    outputArray = []
    for (let y = 0; y < tY; y++) {
        let rowArray = []
        for (let x = 0; x < tX; x++) {
            let tile = document.getElementById("tileContainer").children[count]
            if (tile.classList.contains("tileOn")) {
                rowArray.push(1)
            } else {
                rowArray.push(0)
            }
            count++
        }

        let arrayBlock = document.createElement("div")
        document.getElementById("outputArray").appendChild(arrayBlock)
        if (y == 0) {
            arrayBlock.innerHTML += `[[${rowArray}],`
        } else if (y < tY - 1) {
            arrayBlock.innerHTML += `[${rowArray}],`
        } else {
            arrayBlock.innerHTML += `[${rowArray}]]`
        }
    }

}