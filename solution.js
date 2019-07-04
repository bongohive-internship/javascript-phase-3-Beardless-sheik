// solutions to the exercises mentioned in the readme should be in this file.
function displayGreter(a, b) {
    if (a > b) {
        console.log(a + " is the larger value");
    } else
        console.log(b + " is the larger value");
}

function loopIteration() {
    "use strict";
    for (let i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else
            console.log(i + " is odd");
    }
}

function sumMultiples() {
    "use strict"
    let multipleThree = [],
        multipleFive = [],
        result;
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 == 0) {
            multipleThree.push(i);
        } else if (i % 5 == 0) {
            multipleFive.push(i);
        }
    }
    result = (multipleThree.reduce(acc, item) => ) + (multipleFive.reduce())
}