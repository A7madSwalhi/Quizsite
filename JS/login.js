// Get form input values
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.forms[0];

// Get error message elements
const emailError = document.getElementById("emailOrPhone-error");
const passwordError = document.getElementById("password-error");
const signUpMessage = document.getElementById("sign-up-message");

// Regex patterns for validation
let mailreg = /^([A-Za-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let passreg =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

let users = JSON.parse(localStorage.getItem("users"));
let userInfo;

console.log(users[0].email);
console.log("ahmad.mrx1032001@gmail.com");
console.log(users[0].password);
console.log("A7mad.1032001");
console.log(checkelogin(users, email, password));

email.addEventListener("blur", () => {
    if (!mailreg.test(email.value)) {
        emailError.innerHTML = "Please enter a valid email address.";
        emailError.style.color = "red";
    } else {
        emailError.innerHTML = "";
    }
});

password.addEventListener("blur", () => {
    if (!passreg.test(password.value)) {
        passwordError.innerHTML =
            "Password must be at least 8 characters long and contain at least one letter and one number.";
        passwordError.style.color = "red";
    } else {
        passwordError.innerHTML = "";
    }
});

form.onsubmit = (e) => {
    let validation = false;

    if (
        mailreg.test(email.value) &&
        passreg.test(password.value) &&
        checkelogin(users, email, password)
    ) {
        validation = true;
    }

    if (validation) {
        sessionStorage.setItem("user", JSON.stringify(userInfo));
        document.getElementById("login").addEventListener("click", () => {
            location.href = "welcome.html";
        });
    } else {
        e.preventDefault();
        if (email.value === "" && password.value === "") {
            passwordError.innerHTML =
                "Password must be at least 8 characters long and contain at least one letter and one number.";
            passwordError.style.color = "red";

            emailError.innerHTML = "Please enter a valid email address.";
            emailError.style.color = "red";
        } else if (!checkelogin(users, email, password)) {
            passwordError.innerHTML = "You Should SignUp First";
            passwordError.style.color = "red";
        }
    }
};

function checkuserexist(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == em.value) {
            return users[i];
        }
    }
}

function checkelogin(users, em, pass) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == em.value && users[i].password == pass.value) {
            userInfo = {
                username: users[i].username,
                email: users[i].email,
                loginstate: true,
            };
            return true;
        }
    }
    return false;
}

function checkpasswordforuser(user, email, pass) {}
