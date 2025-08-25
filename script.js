// ========================
// DARK/LIGHT THEME TOGGLE
// ========================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button icon/text depending on mode
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Switch Theme";
    } else {
        themeToggle.textContent = "🌙 Switch Theme";
    }
});

// ========================
// CHARACTER COUNTER FEATURE
// ========================
const commentBox = document.getElementById("comment");
const charCount = document.getElementById("char-count");

commentBox.addEventListener("input", () => {
    const remaining = 150 - commentBox.value.length;
    charCount.textContent = `${remaining} characters remaining`;

    // Change color when close to limit
    if (remaining <= 20) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});

// ========================
// CUSTOM FORM VALIDATION
// ========================
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

// Helper function: show error messages
function showError(input, message) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error");
    errorDisplay.textContent = message;
    input.style.borderColor = "red";
}

// Helper function: show success
function showSuccess(input) {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error");
    errorDisplay.textContent = "";
    input.style.borderColor = "green";
}

// Function to validate email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    } else {
        showSuccess(name);
    }

    // Validate Email
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Enter a valid email address");
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Validate Message
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        isValid = false;
    } else {
        showSuccess(message);
    }

    // If all inputs are valid, display success message
    if (isValid) {
        successMessage.textContent = "✅ Form submitted successfully!";
        form.reset();

        // Reset borders
        [name, email, message].forEach(input => input.style.borderColor = "#ccc");
    } else {
        successMessage.textContent = "";
    }
});
