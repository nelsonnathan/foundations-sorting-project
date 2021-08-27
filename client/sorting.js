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

//Bubble sort works by iterating up through an array, comparing the size of two neighboring elements. If the element size is smaller at an index higher than it's neighbor it's being compared to, then the elements are swapping positions. At the end of the first iteration, the largest element in the array will have been permanently placed at the end of the array and then ignored in the following iterations.

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

//Selection sort works by finding the smallest element in a given array, then moving that to the front of the array. The array is then shortened one element on the front, thereby ignoring the elements already sorted.

async function selectionSort(barsArray) {
    //Define the base index variable
    let baseIndex = 0

    //Make a for loop that's equal to the length of the given array
    for (let i = 0; i < barsArray.length - 1; i++) {
        //At the start of each loop, the base index increments up once. This is so that we can ignore the element that was sorted in the last iteration
        baseIndex = i

        //Make a nested for loop that's also equal to the length of the given array. I've defined the variable here to be equal to i in the parent for loop plus one.
        for (let j = i + 1; j < barsArray.length; j++) {
            //Here I'm checking to see if the element size at index j is less than the element size at the dynamic base index. So for example, on the first iteration through I'm checking to see if the given array at index 1 is less than the given array at index 0.
            if (parseInt(barsArray[j].getAttribute("value")) < parseInt(barsArray[baseIndex].getAttribute("value"))) {
                //If the true, I'm setting the base index equal to j. Going back to the example I started above, the base index now equals 1 and the element size at that index is the new smallest index to compare to.
                baseIndex = j
                await new Promise(resolve => setTimeout(resolve, delay))
            }
        }

        if (baseIndex != i) {
            await swapElements(barsArray[baseIndex], barsArray[i])
        }
    }
}

//Insertion sort works by tracking two arrays - one sorted, one unsorted. It begins by adding the first element from the unsorted array, to the sorted array. It then compares the new first element in the unsorted array to the last element in the sorted array. If the new first element of the unsorted array is less than the last element in the sorted array, the last element in sorted is shifted up an index to make space for the unsorted array element to it's left.

async function insertionSort(barsArray) {
    //Here I'm starting a for loop that's equal to the length of the array. 'i' will be the first element in the unsorted array.
    for (let i = 1; i < barsArray.length; i++) {
        // Now I'm starting a nested for loop that will run while it's variable, 'j', is greater than zero. 'j' will essentially begin as the last element in the sorted array. if i < j, j will shift up an index and on the next iteration of this nested loop will become the second to last element in the sorted array. 'i' will continue to compare to 'j' until the if statement isn't executed and 'i' has found it's place in the sorted array.
        for (let j = i; j > 0; j--) {
            if (parseInt(barsArray[j].getAttribute("value")) < parseInt(barsArray[j - 1].getAttribute("value"))) {
                await swapElements(barsArray[j], barsArray[j - 1])
            }

        }
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    await new Promise(resolve => setTimeout(resolve, delay))
}

let delay = 25



let newChartBtn = document.getElementById("newArr")
let bubbleSortBtn = document.getElementById("bubbleSort")
let selectionSortBtn = document.getElementById("selectionSort")
let insertionSortBtn = document.getElementById("insertionSort")

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

insertionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars")
    insertionSort(barsArray)
})