/* 
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/

const fruits = ['mango', 'apple', 'banana', 'jackfruit', 'watermelon'];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

/* 
Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

const travel = ['Bangladesh' , 'Japan', 'Russia'];
travel.push("Bali");
console.log(travel);

travel.push("Paris", "Maldeves");
console.log(travel);
travel.pop();
console.log(travel);


/* 

Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ["bangla", "english", "math"];
let hasJavascriptBook = books.includes("bangla");
console.log(hasJavascriptBook);
let phy = books.includes("ajav");
console.log(phy);

let myBooks = ["bangla", "english", "math"];
let hasBanglaBooks = myBooks.includes("bangla");
if(hasBanglaBooks) {
    console.log("yes bangla book is available here");
}
else{
    console.log("bangla book is not available here");
}

let myAnotherBooks = ["physics", "chemistry", "math"];
let hasMathBooksNotAvailable = myAnotherBooks.includes("another");

if(hasMathBooksNotAvailable){
    console.log("available");
}
else{
    console.log("not available");
}

/* 
Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

//variable containing arrays

let fruits = ["apple", "banana", "mango"];
let numbers = [1,2,3,4,5];
let colors = ["red", "green", "yellow"];

const name = "john doe";
let isStudent = true;
let age = 22;
const address = {city: "Dhaka", country: "Bangladesh"};


function checkIfArray(variable, variableName) 
{
    if(Array.isArray(variable)){
        console.log(`${variableName} is an array`);
    }
    else {
        console.log(`${variableName} is not an array`);
    }
}

checkIfArray(fruits, "fruits");
checkIfArray(numbers, "numbers");
checkIfArray(colors, "colors");
checkIfArray(name, "name");
checkIfArray(age, "age");
checkIfArray(isStudent, "isStudent");
checkIfArray(address, "address");


let hope = ["meow", "vauvau", "hehe"];
let omg = ["oi", "koi", "shuno"];

let combinedArray = hope.concat(omg);

console.log("Hopes array:" ,hope);
console.log("omg array:" ,omg);

console.log("Combined array:" , combinedArray);
