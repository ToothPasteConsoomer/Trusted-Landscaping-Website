// JavaScript source code
const users = [];

const signupForm = document.getElementById('signup-form');

const loginForm = document.getElementById('login-form');

const successMessage = document.getElementById('success-message');

const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('first-name').value;
    const lastNameInput = document.getElementById('last-name').value;
    const mobileNumberInput = document.getElementById('mobile-number').value;
    const emailInput = document.getElementById('signup-email').value;
    const passwordInput = document.getElementById('signup-password').value;


    if (!emailInput || !passwordInput) {
        errorMessage.textContent = 'Please fill in all required fields';
        return;
    }

    if (users.some(user => user.email === emailInput)) {
        errorMessage.textContent = 'Email already exists.';
        return;
    }

    users.push({

        firstName: firstNameInput,
        lastName: lastNameInput,
        mobileNumber: mobileNumberInput,
        email: emailInput,
        password: passwordInput
    });

    successMessage.textContent = 'Account created successfully!';

    signupForm.reset();
});


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;
    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
        errorMessage.textContent = '';
        successMessage.textContent = 'Login successful!';
    }

    else {
        errorMessage.textContent = 'Invalid email or password';
    }
});