import { quizData } from "./data.js"

var i = Math.floor(Math.random() * quizData.length);
var count = quizData.length - 1;
console.log(quizData)

let ans = [];


window.clicKed = function clicKed() {
    let inputs = document.getElementsByName("option");
    inputs.forEach(ele => {
        if (ele.checked) {
            console.log(i);
            console.log(quizData[i].correct);
            console.log(ele.value);
            ans.push(ele.value == quizData[i].correct)
            // let currans = ele.value == quizData[i].correct;
            // ans.push(currans)
        }
    });
    i++;
    count--;
    render();

};

window.restart = function restart() {
    i = Math.floor(Math.random() * quizData.length);
    count = quizData.length - 1;
    ans = [];
    render();
}

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

    // let question = document.getElementById("q");
    // let a = document.querySelector("#a span");

    // let b = document.querySelector("#b span");

    // let c = document.querySelector("#c span");

    // let d = document.querySelector("#d span");
    // console.log(i)
    // question.textContent = quiz.question;
    // a.textContent = quiz.a;
    // b.textContent = quiz.b;
    // c.textContent = quiz.c;
    // d.textContent = quiz.d;
    return card;
}

function render() {

    if (count < 0) {
        console.log("Done");
        let body = document.querySelector("body");
        let result = ans.filter(a => a == true);
        result = result.length
        let card = `<div id="final"><div>Your have got ${result}/${quizData.length}</div>
        <button type="button" onclick="restart()"> Restart</button></div>
        `

        body.innerHTML = card;
        console.log(result);
    }
    else {
        i = i % quizData.length;
        let body = document.querySelector("body");
        let card = cardEl(quizData[i], i);
        // console.log(card);
        body.innerHTML = card;
    }
}
// let body = document.querySelector("body");
// let button = document.createElement("button");
// button.setAttribute("onclick", "clicKed()");
// button.innerText = "Submit";
// body.appendChild(button)

render();