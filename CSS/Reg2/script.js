// Get references to HTML elements
const formOpenBtn = document.querySelector("#form-open"), // Get the "Login" button element
    home = document.querySelector(".home"), // Get the home section element
    formContainer = document.querySelector(".form_container"), // Get the form container element
    formCloseBtn = document.querySelector(".form_close"), // Get the form close icon element
    signupBtn = document.querySelector("#signup"), // Get the "Sign-Up" link element
    loginBtn = document.querySelector("#login"), // Get the "Login" link element
    pwShowHide = document.querySelectorAll(".pw_hide"); // Get all password show/hide icons

// Add event listener to open form when "Login" button is clicked
formOpenBtn.addEventListener("click", () => home.classList.add("show"));

// Add event listener to close form when form close icon is clicked
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Add event listeners to each password show/hide icon
pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        // Get the associated password input element
        let getPwInput = icon.parentElement.querySelector("input");
        
        // Toggle password visibility
        if (getPwInput.type === "password") {
            getPwInput.type = "text"; // Show password
            icon.classList.replace("uil-eye-slash", "uil-eye"); // Change icon to show eye
        } else {
            getPwInput.type = "password"; // Hide password
            icon.classList.replace("uil-eye", "uil-eye-slash"); // Change icon to hide eye
        }
    })
});

// Add event listener to show the sign-up form when "Sign-Up" link is clicked
signupBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    formContainer.classList.add("active"); // Show the sign-up form
});

// Add event listener to show the login form when "Login" link is clicked
loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    formContainer.classList.remove("active"); // Show the login form
});


/* ===== registeration form ===== */
