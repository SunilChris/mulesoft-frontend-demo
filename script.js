// Signup Form Submission
document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {
        const response = await fetch("http://YOUR_MULESOFT_API:8081/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        const result = await response.text();
        document.getElementById("api-response").innerHTML = result;
    } catch (error) {
        document.getElementById("api-response").innerHTML = "Error: " + error.message;
    }
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const credentials = {
        username: document.getElementById("login-username").value,
        password: document.getElementById("login-password").value
    };

    try {
        const response = await fetch("http://YOUR_MULESOFT_API:8081/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        const result = await response.json();
        
        // Save JWT token to localStorage
        localStorage.setItem("token", result.token);
        document.getElementById("api-response").innerHTML = "Login successful! Token saved.";
    } catch (error) {
        document.getElementById("api-response").innerHTML = "Error: " + error.message;
    }
});