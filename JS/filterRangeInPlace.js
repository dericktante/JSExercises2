function filterRangeInPlace(arr, a, b){
   for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function filterRangeInPlaceSol(){
    const input = prompt("Enter an array of number separated by commas:");
    const a = parseInt(prompt("Enter the lower bound"));
    const b = parseInt(prompt("Enter the upper bound"));
    const result = filterRangeInPlace(input.split(",").map(Number), a, b);
    alert("Filtered Array : " + result.join(", "));
}
