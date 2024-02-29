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
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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
        SecureToken: "3e902af0-3677-4239-a6d9-8037e217e1c1",
        To: "TrustedRC@gmail.com",
        From: emailInput,
        Subject: "Quote Request",
        Body: ebody
    })
    .then(
        message => alert('Quote sent successfully!')
    );
   // formContact.reset(); // Reset the form
});
