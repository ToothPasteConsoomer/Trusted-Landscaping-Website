const users = [];

const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const submit = document.getElementById('submit'); // Define or get the submit button element
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const mobileNumberInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const optionInput = document.getElementById('options');

submit.addEventListener('click', (e) => { // Change 'submit' to 'click'
    e.preventDefault();
    console.log("Clicked");

    if (!emailInput.value) {
        errorMessage.textContent = 'Please fill in all required fields *';
        return;
    }

    let ebody = `
        <b>Name: </b>${firstNameInput.value}&nbsp;${lastNameInput.value}
        <br>
        <b>Email: </b>${emailInput.value}
        <br>
        <b>City: </b>${cityInput.value}
        <br>
        <b>Phone: </b>${mobileNumberInput.value}
        <br>
        <b>Option: </b>${optionInput.value}
        <br>
    `;

    successMessage.textContent = 'Quote sent successfully!';
    Email.send({
        SecureToken: "aa82427b-69d2-4421-b398-622278da0b54",
        To: "moorearic5@gmail.com",
        From: emailInput.value,
        Subject: "Quote Request",
        Body: ebody
    })
    .then(
        message => alert('Quote sent successfully!')
    );
    // submit.reset(); // Assuming signupForm is defined elsewhere
});
