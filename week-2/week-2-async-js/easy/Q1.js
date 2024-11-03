// function timer() {
//     let i = 0;
//     setInterval(() => {
//         console.log(i);
//         i++;
//     }, 1000, i);
// }

// timer();
let i = 0;
// function updateCounter() {
//     i++;
//     console.log(i);
// }

// setInterval(updateCounter, 1000)

function updateValue() {
    i++;
    console.log(i);

    setTimeout(updateValue, 1000);
}

updateValue();

// function timer() {
//     let i = 0;
//     while (i <= 5) {
//         setTimeout(function () { console.log(i); }, 1000);
//         i++;
//     }
// }


// timer();