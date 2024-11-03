/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    function logger(resolve) {
        setTimeout(resolve, n)
    }

    return new Promise(logger);
}

p = wait(5000)

p.then(() => {
    console.log("% seconds are over");
})

// module.exports = wait;
