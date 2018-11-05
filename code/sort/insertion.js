function insertionSort(arr){
    for(let j = 1; j < arr.length; j++){
        let target = arr[j]
        let i = j - 1;
        while(i >= 0 && arr[i]>target){
            arr[i + 1] = arr[i]
            i--
        }
        arr[i + 1] = target
    }
}

let arr = [5,2,6,2]
console.log(arr)
insertionSort(arr)
console.log(arr)
