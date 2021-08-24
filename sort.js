let numbers = [12, 9087, 123, 94, 978, 1, 19, 981, 2332, 198, 878, 8127, 12, 324]

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}

bubbleSort(numbers)
console.log(numbers)
