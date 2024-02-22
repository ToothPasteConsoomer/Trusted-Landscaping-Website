const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit'); // Define or get the submit button element
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const mobileNumberInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const optionInput = document.getElementById('options');
const formContact = document.getElementsByClassName('form-contact')[0];

formContact.addEventListener('submit', (e) => {
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
        SecureToken: "29b73984-0843-426d-8433-6602f28945ce",
        To: "moorearic5@gmail.com",
        From: emailInput.value,
        Subject: "Quote Request",
        Body: ebody
    })
    .then(
        message => alert('Quote sent successfully!')
    );
    formContact.reset(); // Reset the form
});
