let color = ["red", "yellow", "blue", "green", "black", "purple"];
let txtxol = ["white", "black", "white", "white", "white", "white"]


function setBg(col) {
    console.log(col);
    document.querySelector("body").style.background = col;
}

function newCol() {
    let input = document.querySelector("input");
    let val = input.addEventListener("change", () => setBg(input.value))
}

function setButtons(col, id) {
    let btn = document.createElement("button");
    btn.setAttribute("id", id);
    btn.style.color = txtxol[id];
    btn.style.borderColor = txtxol[id];
    btn.style.background = col;
    btn.addEventListener("click", function () {
        setBg(col);
    })
    btn.append(col);
    console.log(btn);
    return btn;
}

function render() {
    color.forEach((col, id) => {
        let btn = setButtons(col, id);
        let btnDiv = document.getElementById("buttons");
        btnDiv.appendChild(btn);
    })
    newCol();
}

render();