const prompt = require('prompt-sync')({sigint: true});
const myString = prompt('Enter a valid string');  //Allows user to enter a string for case swapping

console.log(myString);
/*if(typeof(myString) != 'string') {
    return `The string ${mystring} is not a valid string!`;
}*/ //Doesn't make a difference since user input is usually of type string

//console.log(myString.toLowerCase());
function swapString(str) {
    let newString = '' //initialize an empty string
    for (let i = 0; i < str.length; i++) {
        //console.log(str[i].toLowerCase());
        if (str[i] === str[i].toLowerCase()) {
            newString += str[i].toUpperCase();
        }
        else{
            newString += str[i].toLowerCase();
        }
    }
    return newString;
}

console.log(swapString(myString));