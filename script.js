
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const submit = document.getElementById('submit'); // Define or get the submit button element
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const mobileNumberInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const optionInput = document.getElementById('options');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => { // Change 'submit' to 'click'
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
    submit.reset(); 
});
