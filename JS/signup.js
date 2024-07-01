let users;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    localStorage.setItem("users", JSON.stringify([]));
    users = JSON.parse(localStorage.getItem("users"));
}

console.log(users);

const popup = document.querySelector(".notification");
const close = document.querySelector(".fa-circle-xmark");

const form = document.forms[0];
// Get form input values
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Get error message elements
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

let mailreg = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let passreg =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
const usernameRegex = /^[a-zA-Z0-9]{4,}$/;

username.addEventListener("blur", () => {
    if (usernameRegex.test(username.value)) {
        if (checkuserexist(users, username)) {
            usernameError.innerHTML =
                "The UserName Exist Please Inter Another One";
            usernameError.style.color = "red";
        } else {
            usernameError.innerHTML = "Valid UserName";
            usernameError.style.color = "green";
        }
    } else {
        usernameError.innerHTML =
            "Username must be at least 4 characters long and contain only letters and numbers.";
        usernameError.style.color = "red";
    }
});

email.addEventListener("blur", () => {
    if (mailreg.test(email.value)) {
        if (checkemailexist(users, email)) {
            emailError.innerHTML = "The Email Exist Pleaset Inter New One";
            emailError.style.color = "red";
        } else {
            emailError.innerHTML = "Valid Email";
            emailError.style.color = "green";
        }
    } else {
        emailError.innerHTML = "Please enter a valid email address.";
        emailError.style.color = "red";
    }
});

password.addEventListener("blur", () => {
    if (passreg.test(password.value)) {
        passwordError.innerHTML = "Valid Password";
        passwordError.style.color = "green";
    } else {
        passwordError.innerHTML =
            "Password must be at least 8 characters long and contain at least one letter and one number.";
        passwordError.style.color = "red";
    }
});

confirmPassword.addEventListener("blur", () => {
    if (confirmPassword.value === password.value) {
        confirmPasswordError.innerHTML = "The Password Match";
        confirmPasswordError.style.color = "green";
    } else {
        confirmPasswordError.innerHTML = "The Password Do Not Match";
        confirmPasswordError.style.color = "red";
    }
});

form.onsubmit = (e) => {
    let validation = false;

    if (
        usernameRegex.test(username.value) &&
        mailreg.test(email.value) &&
        passreg.test(password.value) &&
        confirmPassword.value === password.value &&
        checkExist()
    ) {
        validation = true;
    }

    if (validation) {
        users.push({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
        btn.disabled = true;

        popup.style.display = "block";
    } else {
        e.preventDefault();
    }
};

function checkemailexist(users, input) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === input.value) {
            return true;
        }
    }
    return false;
}

function checkuserexist(users, input) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === input.value) {
            return true;
        }
    }
    return false;
}

const checkExist = function () {
    if (checkuserexist(users, username) || checkemailexist(users, email)) {
        return false;
    } else {
        return true;
    }
};

close.addEventListener("click", () => {
    popup.style.display = "none";
});
