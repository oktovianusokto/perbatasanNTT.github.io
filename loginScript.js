document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "BPPD_NTT" && password === "nusantara") {
        alert("Login berhasil!");
        window.location.href = "index.html"; 
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
});
