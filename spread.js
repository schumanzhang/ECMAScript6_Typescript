"use strict";

//spread operators
function addNumbers(a ,b, c) {
    console.log(a + b + c);
}

var nums = [3, 4, 5];

//old way
addNumbers(nums[0], nums[1], nums[2]);

//new es6 way
addNumbers(...nums); //just splits the array elements

//throwing elements from one array and throw them into another
var meats = ['chicken', 'beef'];
var food = ['apple', ...meats, 'kiwi', 'rice'];

console.log(food);