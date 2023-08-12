document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm"),
        signupEmailOrMobile = document.getElementById("signupEmailOrMobile"),
        signupPassword = document.getElementById("signupPassword"),
        signupConfirmPassword = document.getElementById("signupConfirmPassword"),
        signupBtn = document.getElementById("signupBtn"),
        signupError = document.getElementById("signupError"),

        loginForm = document.getElementById("loginForm"),
        loginEmailOrMobile = document.getElementById("loginEmailOrMobile"),
        loginPassword = document.getElementById("loginPassword"),
        loginBtn = document.getElementById("loginBtn"),
        loginError = document.getElementById("loginError");

    let storedEmailOrMobile = "";
    let storedPassword = "";

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Perform signup validation here
        if (!signupEmailOrMobile.value || !signupPassword.value || !signupConfirmPassword.value) {
            signupError.textContent = "Please fill in all fields.";
            return;
        }

        if (signupPassword.value !== signupConfirmPassword.value) {
            signupError.textContent = "Passwords do not match.";
            return;
        }

        // Store signup data
        storedEmailOrMobile = signupEmailOrMobile.value;
        storedPassword = signupConfirmPassword.value;

        // Move to login page
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Perform login validation here
        if (loginEmailOrMobile.value === storedEmailOrMobile && loginPassword.value === storedPassword) {
            // Assuming successful login, move to home page
            window.location.href = "home.html";
        } else {
            loginError.textContent = "Email/mobile or password is incorrect.";
        }
    });
});
