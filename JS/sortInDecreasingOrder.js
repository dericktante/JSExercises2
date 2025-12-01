function sortInDecreasingOrder(arr) {
    return arr.sort((a, b) => b - a);
}

function sortInDecreasingOrderSol() {
    const input = prompt("Enter an arry of number separated by commas:");
    const arr = input.split(",").map(Number);
    const sortedArray = sortInDecreasingOrder(arr);
    alert("Original Array: " + arr.join(", ") + "\n Sorted Array in Decreasing Order: " + sortedArray.join(", "));
}