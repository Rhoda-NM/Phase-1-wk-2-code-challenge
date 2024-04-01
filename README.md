# Week 2 -Phase-1 code challenge

##Intro
This code challenge included three javascript challenges which are:
A function that swaps the  case of a string, A function that generates an array of numbers and one that takes an array of numberas and returns a new array of prime numbers.

Date: 04/01/2024

## Description
### 1. caseSwap.js
The code prompts the user for a valid string which is then passed as an argument to the swapCase function.

Some concepts used for this code are:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data.
2. A for loop- loops through the characters in a given string,
3. IF -ELSE Statement that checks the current case of the character
4. toUpperCase and toLowerCase are inbuilt methods that perform case swap on the passes character.

Example of how the code works:


![caseSwap](https://github.com/Rhoda-NM/Phase-1-wk-2-code-challenge/assets/56297292/d78691bc-f34d-4fae-9ac0-e77733378e06)


### 2. arrayGenerator.js
The code takes in two numbers and generates an array of all the numbers between the two given ones.

Some concepts used for this code are:
Prompt- A javascript method that displays a dialog box for inputting the user's data.
ParseInt - converts user input to  number data type
For loop: loops through numbers from the starting number to the last number with an increment or decrement of 1 pushing the numbers into a new array.
The generateArray function returns a new array of numbers.

   Example of the working code:

   
![Screenshot from 2024-04-01 09-31-06](https://github.com/Rhoda-NM/Phase-1-wk-2-code-challenge/assets/56297292/19c9ce43-ba6a-4d9e-89a5-8532548722e0)


### 3.PrimeArray.js
The code takes in an array of numbers and returns a new array that contains only the prime numbers.
The code works as follows:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data.
2. ParseInt - converts user input to  number data type
3. .split method splits the string of numbers entered using whitespace or comma.
4. map(Number) converts an array of strings into a new array of numbers.
5. % operator returns the remainder of division.
6. In the for loop:
               Continue allows to skip the current iteration and continue the loop
               Break allows to break the loop and continue executing the next lines of code
7. Use of a boolean value that helps check if the number is a prime number.
8. Working concept: Iterating through each number in the given array, for each iteration, use a nested loop that loops from 2 to number-1 checking for the mod.

Example of the work:


![primeNumbers](https://github.com/Rhoda-NM/Phase-1-wk-2-code-challenge/assets/56297292/4bf1c5b3-8ac4-46a9-a90f-a160a5e90b19)





## Authors

- [@Rhoda Muya](https://www.github.com/Rhoda-NM)


## Installation

Use git clone to download the project files from github
## Run Locally

Clone the project

```bash
  git clone https://github.com/Rhoda-NM/Phase-1-wk1-code-challenge.git
```



## Tech Stack

**Javascript

#Dependencies:   
*prompt-sync

## Running Tests

To run tests, run the following command

```bash
node 'js file'
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## File structure
The project folder contains:

|-node modules                       
|-arrayGenerator.js  
|-caseSwap.js  
|-LICENSE
|-{}package-lock.json    
|-{} package.json 
|-primeArray.js     
|-README.md
