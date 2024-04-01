const prompt = require('prompt-sync')({sigint: true});
const input = prompt('Enter your numbers');
const inputArray = input.split(/[\s,]+/); //Takes an input string and splits using a comma or whitespace
//console.log(inputArray);
const numbersArray = inputArray.map(Number);// converts an array of strings into an array of numbers
console.log(numbersArray);
const primeArray = []; 
function checkPrime(arr) {
    let isPrime = true;
    
    for(const num of arr){
        if(num <= 1){continue} //Allows us to continue to next iteration since prime numbers are natural numbers greater than one
    
        
        for (let i = 2; i < num; i++ ) { ///Allows us to check if the current iteration number is ivisible by any number between 2 and num-1
            if(num  % i == 0) {
                isPrime = false;
                break; //Allows us to break out of current loop, since the number is divisible by another number other than 1 anditself
            }
        }
        if(isPrime) {
            primeArray.push(num)
        }
        isPrime = true; //reset the value of isPrime before next iteration, otherwise it remains false and no other number is checked
    }
    return primeArray;
    //console.log(primeArray);
}
//checkPrime(originalArray);
console.log(checkPrime(numbersArray));