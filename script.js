const users = [];

const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const firstNameInput = document.getElementById('fname').value;
	const lastNameInput = document.getElementById('lname').value;
	const mobileNumberInput = document.getElementById('phone').value;
	const emailInput = document.getElementById('email').value;
	const cityInput = document.getElementById('city').value;
	const languageInput = document.getElementById('language').value;

	if (!emailInput) {
		errorMessage.textContent = 'Please fill in all required fields *';
		return;
	}
	users.push ({
		firstName: firstNameInput,
		lastName: lastNameInput,
		phone: phoneInput,
		email: emailInput,
		city: cityInput,
	});
	successMessage.textContent = 'Quote sent sccuessfully!';

	signupForm.reset();
});

