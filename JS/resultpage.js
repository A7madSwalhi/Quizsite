const totQues = document.querySelector(".totQues");
const score = document.querySelector(".score");
const table = document.querySelector(".table-container");
const showtablebtn = document.querySelector("#showQustionsBtn");
const tabledata = document.querySelector(".tabledata");

const statResult = JSON.parse(localStorage.getItem("result"));
const userAnswer = JSON.parse(localStorage.getItem("answers"));

console.log(statResult);
console.log(userAnswer);
console.log(tabledata);

window.onload = () => {
    totQues.innerHTML = statResult.qNumber;
    score.innerHTML = statResult.correctAnswer;

    if (statResult.correctAnswer >= 5) {
        document.documentElement.style.setProperty(
            "--pass",
            " rgb(0, 223, 104)"
        );
    } else {
        document.documentElement.style.setProperty(
            "--pass",
            "rgb(215, 35, 44)"
        );
    }
};

showtablebtn.addEventListener("click", () => {
    table.style.display = "initial";
    addToTable(userAnswer);
});

function addToTable(userAnswer) {
    for (let i = 0; i < userAnswer.length; i++) {
        let answer = userAnswer[i];
        let row = document.createElement("tr");
        console.log(userAnswer.answer);
        if (answer.correctAnswer === answer.select) {
            row.className = "tablegreen";
        } else {
            row.className = "tablered";
        }
        let text = `
            <td>${i + 1}</td>
            <td>${answer.ques}</td>
            <td>${answer.select}</td>
            <td>${answer.correctAnswer}</td>
        `;
        row.innerHTML = text;
        tabledata.appendChild(row);
        console.log(row);
    }
}
