const uname = document.getElementById("username");
const btns = document.querySelector(".btns");

let user = JSON.parse(sessionStorage.getItem("user"));

console.log(user);
console.log(uname);
console.log(user.loginstate);
console.log(btns);

window.addEventListener("load", () => {
    if (user && user.loginstate) {
        uname.innerHTML = user.username;
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

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
