// import the dataset containing the quiz questions
import { quizData } from "./data.js"

//variable to handle the index of question number to be shown from the array.
var i = Math.floor(Math.random() * quizData.length);

// variable to count the number of questions answered so that once finished we can show the restart option
var count = quizData.length - 1;
console.log(quizData)

// boolean array to store the users answers if they are true or false
let ans = [];

// function to handle the submission of answers

window.clicKed = function clicKed() {
    let inputs = document.getElementsByName("option");
    inputs.forEach(ele => {
        if (ele.checked) {
            console.log(i);
            console.log(quizData[i].correct);
            console.log(ele.value);
            ans.push(ele.value == quizData[i].correct)
        }
    });
    i++;
    count--;
    render();

};

//function to restart the quiz, once finishes
// we reset the variable i, count and also the ans array

window.restart = function restart() {
    i = Math.floor(Math.random() * quizData.length);
    count = quizData.length - 1;
    ans = [];
    render();
}

// function that creates and returns the card component

function cardEl(quiz, i) {

    let card = `<div id="card">
        <h3 id="q">${quiz.question}</h3>
        <div id="a">
            <input type="radio" name="option" value="a">
            <span>${quiz.a}</span>
        </div>
        <div id="b">
            <input type="radio" name="option" value="b">
            <span>${quiz.b}</span>
        </div>
        <div id="c">
            <input type="radio" name="option" value="c">
            <span>${quiz.c}</span>
        </div>
        <div id="d">
            <input type="radio" name="option" value="d">
            <span>${quiz.d}</span>
        </div>
        <button type="button" onclick="clicKed()">select</button>
    </div>`;
    return card;
}

// this function renders everything to the screen

function render() {

    if (count < 0) {
        console.log("Done");
        let body = document.getElementById("body");
        let result = ans.filter(a => a == true);
        result = result.length
        let card = `<div id="final"><h2>Your score is  ${result}/${quizData.length}</h2>
        <button type="button" onclick="restart()"> Restart</button></div>
        `

        body.innerHTML = card;
        console.log(result);
    }
    else {
        i = i % quizData.length;
        let body = document.getElementById("body");
        let card = cardEl(quizData[i], i);
        // console.log(card);
        body.innerHTML = card;
    }
}

render();