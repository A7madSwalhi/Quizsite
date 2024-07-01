/* document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        console.log(`Button ID: ${buttonId}`);
        console.log(`Button Text: ${buttonText}`);
    });
});
 */

localStorage.removeItem("quizid");

document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        quiznumber = buttonId;
        window.location.href = "quizinstruction.html";
        window.localStorage.setItem("quizid", buttonId);
    });
});
