// Timer
let timer = document.getElementById("timer");
let timeRemaining = 10 * 60; // 10 minutes in seconds

function startTimer() {
    const interval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        } else {
            timeRemaining--;
            let minutes = Math.floor(timeRemaining / 60);
            let seconds = timeRemaining % 60;
            timer.textContent = `${minutes}:${
                seconds < 10 ? "0" : ""
            }${seconds}`;
        }
    }, 1000);
}

startTimer();

// Option selection
const options = document.querySelectorAll(".option");
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((opt) => {
            opt.style.backgroundColor = "";
            opt.style.color = "";
        });
        option.style.backgroundColor = "#006400";
        option.style.color = "#fff";
    });
});
