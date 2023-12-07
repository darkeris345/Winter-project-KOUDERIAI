function validateEmail(inputId) {
    const emailInput = document.getElementById(inputId);
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        // Valid email
        emailInput.value = '';
        alert("We've got your message and sent instructions to your email. 😃");
    } else {
        // Invalid email
        emailInput.value = '';
        alert("Wrong type of input! Please try again. 🤔");
    }
}

document.querySelector('.validate__second').addEventListener('click', function(event) {
    validateEmail('email__two');
    event.preventDefault();
});