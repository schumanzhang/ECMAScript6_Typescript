"use strict";

//traditional function
function areaOfCircle(r) {
    const PI = 3.14;
    return PI * r * r;
}

//arrow functions make functions faster to write, leaving out keyword function
let circleArea = (r) => {
    const PI = 3.14;
    return PI * r * r;
}

//an even more simplier form, one parameter no need for the parenthesis
let circleArea2 = r => 3.14 * r * r;
