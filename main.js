function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentElement;
    }
    return arr;
}

// Example usage:
const myArray = [12, 11, 13, 5, 6];
const sortedArray = insertionSort(myArray);
console.log(sortedArray); // [5, 6, 11, 12, 13]
