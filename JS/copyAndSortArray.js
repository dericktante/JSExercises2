function copySorted(arr){
    return arr.slice().sort();
    
}

function copySortedSol(){
    const input = prompt("Enter an array of Strings seperarted by commas, e.g. HTML,JavaScript,CSS: ");
    const arr = input.split(",");
    const sortedArray = copySorted(arr);
    alert("Original Array: " + arr.join(", ") + "\n Sorted Array: " + sortedArray.join(", "));
}