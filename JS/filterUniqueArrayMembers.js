function unique(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function uniqueSol(){
    arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    const result = unique(arr);
    alert("Original Array: " + arr.join(", ") + "\n Unique Array: " + result.join(", "));
}