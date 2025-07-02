const loginForm = document.querySelector(".login-form");

// 2. Добавляем слушателя события 'submit'
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in");
    } else {
        const formData = {
            email: emailValue,
            password: passwordValue,
        };

        console.log(formData);

        loginForm.reset();
    }
});
