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

    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const btns = document.querySelector(".btns");
    let user = JSON.parse(sessionStorage.getItem("user"));

    window.addEventListener("load", () => {
        if (user && user.loginstate) {
            btns.innerHTML = `<button type="button" onclick="logout() ">
                            LogOut
                        </button>`;
            console.log(`from event`);
        }
    });

    function logout() {
        sessionStorage.clear();
        location.href = "Home.html";
    }
});
