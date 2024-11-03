/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    function halt(resolve) {
        for (let i = 0; i < milliseconds; i++) {

        }
        resolve();
    }

    return new Promise(halt);
}

let p = sleep(5000000000);

p.then(() => console.log("Wait is over"));

// module.exports = sleep;
