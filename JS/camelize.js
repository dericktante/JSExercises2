function camelize(str){
    return str
    .split("-")
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function camelizeSol(){
    const input = prompt("Enter a hyphenated multi-word string: e.g., try border-left-width");
        alert (input + " turns into " + camelize(input));
}