// Using the different way of accessing and assigning a value to the object using `.` or `[]`
var batch = {
    strength : 7,
    campus : "AltCampus",
    10 : "lack",
    "no of rooms" : 15,
}
var batch2 = batch.strength;

var test = batch.campus;

batch["use square"] = "just checking";

batch.usedot = "this output is using dot";

console.log([test]);
console.log(batch.strength);
console.log(batch[10]);
console.log(batch["no of rooms"]);
console.log(batch["use square"]);
console.log(batch2);
console.log(batch.usedot);

// 1. Define a variable named `user` and assign a blank object to it.

var blank = {};
var user = blank;

// 2. Add a key of `user name` and a value of `Black Panther` to that object.

var blank = {
    "user name" : "Black Panther"
};

var user = blank;


// 3. Using `console.log` log the value of `user name` key from the user object.

var blank = {
    "user name" : "Black Panther"
};
console.log(blank["user name"]);


// 4. Add a key of the value of variable `batch` in the object with the value of 10.

var blank = {
    "user name" : "Black Panther",
    "variable batch" : 10,
};
console.log(blank["user name"]);


// 5. Using the alert function alert the value of the key added above.


alert(blank["variable batch"]);


// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.

var blank = {
    "user name" : "Black Panther",
    "variable batch" : 10,
    42 : "The answer to the meaning of life 🧸",
};


// 7. Using the function console.log log the value of the key `42`.


console.log(blank[42]);



// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.


var blank = {
    "user name" : "Black Panther",
    "variable batch" : 10,
    42 : "The answer to the meaning of life 🧸",
    "variable city" : true,
};


// 9. Uisng console.log log the value of the key defined above.


console.log(blank["variable city"]);



// 10. Can you define a key of `let or var` in any object? Reason.
 
yes we, inside object these keywords are allowed except _proto_ 