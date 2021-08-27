function createBars() {
    let barArr = []
    let barContainer = document.querySelector(".barContainer")

    for (let i = 1; i <= 50; i++) {
        let barWidth = Math.floor(Math.random() * 1000) + 10
        barArr.push(barWidth)

        let bar = document.createElement("div")

        bar.classList.add("bars")
        bar.style.width = `${barWidth}px`
        bar.setAttribute("value", barWidth)

        barContainer.appendChild(bar)
    }
}

function deleteBars() {
    document.querySelectorAll(".bars").forEach((node) => {
        node.remove()
    })
}

async function swapElements(barOne, barTwo) {
    const a = parseInt(barTwo.getAttribute("value"))
    const b = parseInt(barOne.getAttribute("value"))

    barOne.setAttribute("value", a)
    barTwo.setAttribute("value", b)

    barOne.style.width = `${a}px`
    barTwo.style.width = `${b}px`
    await new Promise(resolve => setTimeout(resolve, delay))
}

async function bubbleSort(barsArray) {
    for (let i = 0; i < barsArray.length - 1; i++) {
        for (let j = 0; j < barsArray.length - 1 - i; j++) {

            if (parseInt(barsArray[j].getAttribute("value")) > parseInt(barsArray[j + 1].getAttribute("value"))) {
                swapElements(barsArray[j], barsArray[j + 1])
            }

            await new Promise(resolve => setTimeout(resolve, delay))
        }
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    return barsArray
}

async function selectionSort(barsArray) {
    let baseIndex = 0

    for (let i = 0; i < barsArray.length - 1; i++) {
        baseIndex = i

        for (let j = i + 1; j < barsArray.length; j++) {
            if (parseInt(barsArray[j].getAttribute("value")) < parseInt(barsArray[baseIndex].getAttribute("value"))) {
                baseIndex = j
                await new Promise(resolve => setTimeout(resolve, delay))
            }

            if (baseIndex != j) {
                await new Promise(resolve => setTimeout(resolve, delay))
            }
        }

        if (baseIndex != i) {
            await swapElements(barsArray[baseIndex], barsArray[i])
        }
    }
}

let delay = 25



let newChartBtn = document.getElementById("newArr")

let bubbleSortBtn = document.getElementById("bubbleSort")

let selectionSortBtn = document.getElementById("selectionSort")

newChartBtn.addEventListener("click", () => {
    deleteBars()
    createBars()
})

bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars")
    bubbleSort(barsArray)
})

selectionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars")
    selectionSort(barsArray)
})