function submitForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    authenticateUser(email, password)
        .then((isValid) => {
            if (isValid) {
                window.location.href = "welcomePage.html";
            } else {
                alert("Invalid email or password. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("An error occurred during authentication:", error);
            alert("An error occurred during login. Please try again later.");
        });
}
function authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
        const validEmail = "user@gmail.com";
        const validPassword = "1234";


        setTimeout(() => {
            if (email === validEmail && password === validPassword) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000);
    });
}
