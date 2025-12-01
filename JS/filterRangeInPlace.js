function filterRangeInPlace(array, a, b){
   for (let i = 0; i < array.length; i++){
        let val = array[i];

        if (val < a || val > b) {
            array.splice(i, 1);
            i--;
        }
    }
}
let array = [5, 3, 8, 1];
filterRangeInPlace(array, 1, 4);
console.log( array ); 
