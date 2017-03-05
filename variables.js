"use strict";

//var is unclear when it comes to scope
//let is block scoping

let movie = 'Titanic'; //global scope, also available inside child scope

function theNoteBook() {
    let movie = 'The notebook';
    //only can use movive in same block
    return movie;
}

function dumbFunction() {
    let isHorse = true;
    let saying = 'pork is good';
    console.log('before if:', saying); //pork is good

    if (isHorse) {
        let saying = 'pork is bad';
        console.log('inside if:', saying); //pork is bad
    }

    console.log('after if:', saying); //pork is good
}

//const are immutable variables
const PI = 3.141593;