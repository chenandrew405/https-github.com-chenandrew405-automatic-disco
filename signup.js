// Generate a random CAPTCHA
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

let currentCaptcha = "";

// Display the CAPTCHA
function setCaptcha() {
    currentCaptcha = generateCaptcha();
    const captchaText = document.getElementById("captchaText");
    captchaText.textContent = currentCaptcha;
}

// Initialize CAPTCHA on page load
document.addEventListener("DOMContentLoaded", () => {
    setCaptcha();

    // Refresh CAPTCHA on button click
    document.getElementById("refreshCaptcha").addEventListener("click", () => {
        setCaptcha();
    });

    // Handle form submission
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const captchaInput = document.getElementById("captchaInput").value;
        const errorMessage = document.getElementById("errorMessage");

        // Validate passwords match
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }

        // Validate CAPTCHA
        if (captchaInput !== currentCaptcha) {
            errorMessage.textContent = "Incorrect CAPTCHA. Please try again.";
            setCaptcha(); // Generate new CAPTCHA
            document.getElementById("captchaInput").value = ""; // Clear input
            return;
        }

        // Save user data in localStorage
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Sign-up successful! Welcome!");
        // Redirect to the welcome page
        window.location.href = "welcome.html";
    });
});