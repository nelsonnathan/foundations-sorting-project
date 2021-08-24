function createBars() {
    let barArr = []
    let barContainer = document.querySelector(".barContainer")

    for (let i = 1; i <= 100; i++) {
        let barWidth = Math.floor(Math.random() * 1500) + 10
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

async function bubbleSort(barsArray) {
    for (let i = 0; i < barsArray.length - 1; i++) {
        for (let j = 0; j < barsArray.length - 1 - i; j++) {
            console.log(barsArray[j])


            if (parseInt(barsArray[j].getAttribute("value")) > parseInt(barsArray[j + 1].getAttribute("value"))) {
                const a = parseInt(barsArray[j + 1].getAttribute("value"))
                const b = parseInt(barsArray[j].getAttribute("value"))

                barsArray[j].setAttribute("value", a)
                barsArray[j + 1].setAttribute("value", b)

                barsArray[j].style.width = `${a}px`
                barsArray[j + 1].style.width = `${b}px`
            }

            await new Promise(resolve => setTimeout(resolve, delay))
        }
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    return barsArray
}

let delay = .1

let newChartBtn = document.getElementById("newArr")

let bubbleSortBtn = document.getElementById("bubbleSort")

newChartBtn.addEventListener("click", () => {
    deleteBars()
    createBars()
})

bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars")
    bubbleSort(barsArray)
})