document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Get stored user data
        const storedUser = JSON.parse(localStorage.getItem("user"));

        // Check if credentials match
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert("Login successful!");
            // Redirect to welcome page after successful login
            window.location.href = "welcome.html";
        } else {
            document.getElementById("errorMessage").textContent = "Invalid username or password.";
        }
    });
});