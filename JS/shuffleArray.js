function shuffle(array){
    let copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy; 
}

function shuffleSol(){
    const input = prompt("Enter an array of number separated by commas:");
    const arr = input.split(",").map(Number);
    const shuffledArray = shuffle(arr);
    alert("Original Array: " + arr.join(", ") + "\n Shuffled Array: " + shuffledArray.join(", "));
}