const users = [];

const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const firstNameInput = document.getElementById('fname').value;
const lastNameInput = document.getElementById('lname').value;
const mobileNumberInput = document.getElementById('phone').value;
const emailInput = document.getElementById('email').value;
const cityInput = document.getElementById('city').value;
const optionInput = document.getElementById('options').value;
submit.addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log("Clicked");

	if (!emailInput) {
		errorMessage.textContent = 'Please fill in all required fields *';
		return;
	}
	let ebody = '
		<b>Name: </b>${fname.value}&nbsp;${lname.value}
		<br>
		<b>Email: </b>${email.value}
		<br>
		<b>City: </b>${city.value}
		<br>
		<b>Phone: </b>${phone.value}
		<br>
		<b>Option: </b>${options.value}
		<br>
		';
    successMessage.textContent = 'Quote sent sccuessfully!';
    Email.send({
    SecureToken : "aa82427b-69d2-4421-b398-622278da0b54",
    To : "moorearic5@gmail.com",
    From : emailInput,
    Subject : "Quote Request",
    Body : ebody
})
.then(
  message => alert(successMessage)
);
signupForm.reset();
});


