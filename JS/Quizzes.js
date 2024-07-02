/* document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        console.log(`Button ID: ${buttonId}`);
        console.log(`Button Text: ${buttonText}`);
    });
});
 */

document.addEventListener("DOMContentLoaded", (event) => {
    // Remove previous quizid from localStorage
    localStorage.removeItem("quizid");

    // Select all elements with class 'quiz'
    const quizItems = document.querySelectorAll(".quiz");

    // Add event listener to each quiz item
    quizItems.forEach((quizItem) => {
        quizItem.addEventListener("click", (event) => {
            // Prevent the default action of the anchor tag
            event.preventDefault();

            // Get the ID of the clicked element
            const quizId = event.currentTarget.id;

            // Store the ID in localStorage
            localStorage.setItem("quizid", quizId);

            // Redirect to the href of the anchor tag
            window.location.href = event.currentTarget.href;
        });
    });
});
