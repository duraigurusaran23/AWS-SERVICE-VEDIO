const API_BASE_URL = "https://qe4izz39w8.execute-api.eu-north-1.amazonaws.com/dev";

// Ensure event listeners are added after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", login);
    }
    if (signupForm) {
        signupForm.addEventListener("submit", signup);
    }
});

// ✅ Async Login Function
async function login(event) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            window.location.href = "page.html"; // Redirect after login
        } else {
            alert(data.error || "Login failed!");
        }
    } catch (error) {
        console.error("Login Error:", error);
        alert("Something went wrong. Please try again.");
    }
}

// ✅ Async Signup Function
async function signup(event) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/signin`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert("Signup successful!");
            window.location.href = "page.html"; // Redirect after signup
        } else {
            alert(data.error || "Signup failed!");
        }
    } catch (error) {
        console.error("Signup Error:", error);
        alert("Something went wrong. Please try again.");
    }
}
