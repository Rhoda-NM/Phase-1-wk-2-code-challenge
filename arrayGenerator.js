const prompt = require('prompt-sync')({sigint: true});
const firstNumber= parseInt(prompt('Enter array starting point'));
const lastNumber = parseInt(prompt('Enter the array endpoint'));
//Allows user to define the start and end of the array, and converts input to a number

/*if(typeof(firstNumber) != 'number' || typeof(lastNumber) != 'number') {
    console.log('Enter valid numbersfor your array');
}
*/
function generateArray(start, end) {
    let newArray = [];
    //console.log(newArray);
    if(end > start) {
        //console.log(start)
        for(let x = start; x <= end; x ++){
            newArray.push(x);
            //console.log(x);
        }
        return newArray;
        //console.log(newArray);
    }
    else {
        for(let x = start; x >= end; x --){
            newArray.push(x);
            //console.log(x);
        }
        return newArray;
    }
} 
generateArray(firstNumber, lastNumber);
console.log(generateArray(firstNumber, lastNumber));