const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit'); // Define or get the submit button element
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const mobileNumberInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const cityInput = document.getElementById('city');
const optionInput = document.getElementById('options');
const formContact = document.getElementById('form-contact'); // Replace with the actual ID of your form

formContact.addEventListener('submit', (e)=> {
    e.preventDefault();
    let ebody = `
        <h2>Name: </h2>${firstNameInput.value}&nbsp;${lastNameInput.value}
        <br>
        <h2>Email: </h2>${emailInput.value}
        <br>
        <h2>City: </h2>${cityInput.value}
        <br>
        <h2>Phone: </h2>${mobileNumberInput.value}
        <br>
        <h2>Option: </h2>${optionInput.value}
        <br>
    `;
    if (!emailInput.value) {
        errorMessage.textContent = 'Please fill in all required fields *';
        return;
    } else {
        successMessage.textContent = 'Quote sent successfully!';
    }

    // Assuming you have the appropriate library script or import statement for sending emails
    Email.send({
        SecureToken: "2ca5c834-f20c-4e72-8b18-a27e0ac74d1d",
        To: "moorearic5@gmail.com",
        From: "moorearic5@gmail.com",
        Subject: "Quote Request",
        Body: ebody
    })
    .then(
        message => alert('Quote sent successfully!')
    );
   // formContact.reset(); // Reset the form
});
