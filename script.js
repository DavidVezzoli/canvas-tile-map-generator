let wdt = 10
let hgt = 10
const tWdt = 20;
const tHgt = 20;
const tX = wdt / tWdt
const tY = hgt / tHgt

let outputArray = []
let clr = "none"

document.getElementById("x-tiles").value = wdt
document.getElementById("y-tiles").value = hgt

document.getElementById("tileContainer").style.width = tWdt * wdt + "px"
document.getElementById("tileContainer").style.height = tHgt * hgt + "px"

document.getElementById("x-tiles").addEventListener("change", (e) => {
    document.getElementById("tileContainer").innerHTML = ""
    wdt = document.getElementById("x-tiles").value
    newMap()
})

document.getElementById("y-tiles").addEventListener("change", (e) => {
    document.getElementById("tileContainer").innerHTML = ""
    hgt = document.getElementById("y-tiles").value
    newMap()
})

document.getElementById("colorSelector").addEventListener("change", (e) => {
    clr = e.target.value.toLowerCase()
})

newMap()

function newMap() {

    for (let x = 0; x < wdt; x++) {
        for (let y = 0; y < hgt; y++) {
            let tile = document.createElement("div");
            tile.classList.add("tile")
            tile.addEventListener('click', () => {
                tile.style.backgroundColor = clr;
            })

            document.getElementById("tileContainer").appendChild(tile)
        }
    }
}

function generateArray() {

    let count = 0;
    outputArray = []
    for (let y = 0; y < hgt; y++) {
        let rowArray = []
        for (let x = 0; x < wdt; x++) {
            let tile = document.getElementById("tileContainer").children[count]
            rowArray.push(setTileNumber(tile.style.backgroundColor))
            count++
        }
        outputArray.push(`<br/>[${rowArray}]`)
    }
    document.getElementById("outputArray").innerHTML += outputArray
}

function setTileNumber(tileColor) {
    switch (tileColor) {
        case "green":
            return 1
        case "brown":
            return 2
        case "chocolate":
            return 3
        case "red":
            return 4
        case "orange":
            return 5
        case "purple":
            return 6
        default:
            return 0
    }
}