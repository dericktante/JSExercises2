function filterRange(arr, a, b){
    return arr
    .filter(item => ( item >= a && item <= b));
}

function filterRangeSol(){
    const input = prompt("Enter an array of numbers separated by commas:");
    const a = parseInt(prompt("Enter the lower bound"));
    const b = parseInt(prompt("Enter the upper bound"));
    alert("Filtered array: " + filterRange(input.split(",").map(Number), a, b).join(", "));
}
