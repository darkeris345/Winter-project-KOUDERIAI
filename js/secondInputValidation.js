function validateEmail(inputId) {
  const emailInput = document.getElementById(inputId);
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.trim() === "") {
    emailInput.placeholder = "This field is empty";
    emailInput.classList.add("error__placeholder");
    emailInput.style.opacity = 0.5;
    setTimeout(() => {
      emailInput.classList.remove("error__placeholder");
      emailInput.style.color = "#36536B";
      emailInput.style.opacity = 1;
    }, 2000);
    return;
  }
  if (emailRegex.test(emailValue)) {
    emailInput.value = "";
    emailInput.placeholder = "Enter email address";
    alert("We've got your message and sent instructions to your email. 😃");
  } else {
    emailInput.value = "";
    emailInput.placeholder = "Enter email address";
    alert("Invalid email! Please try again. 🤔");
  }
}

document.querySelector('.validate__second').addEventListener('click', function (event) {
  validateEmail('email__two');
  event.preventDefault();
});