"use strict";

//generators - make functions with checkpoints in them
//yield means pause
function* simpleGenerator() {
    yield 'apples';
    yield 'pears';
    console.log('new line');
    yield 'pineapple';
}

let sample = simpleGenerator();
console.log(sample.next()); //{value: 'apples', done: false}
console.log(sample.next()); //{value: 'pears', done: false}

function* getUserId() {
    let id = 0;
    while(id < 3) {
        yield id++;
    }
}

let createUser = getUserId();
