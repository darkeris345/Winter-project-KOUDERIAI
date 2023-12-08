function validateEmail(inputId) {
  const emailInput = document.getElementById(inputId);
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.trim() === "") {
    emailInput.value = "This field is empty";
    emailInput.style.color = "#BA4270";
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "#36536B";
    }, 2000);
    return;
  }
  if (emailRegex.test(emailValue)) {
    emailInput.value = "";
    alert("We've got your message and sent instructions to your email. 😃");
  } else {
    emailInput.value = "";
    alert("Invalid email! Please try again. 🤔");
  }
}

document.querySelector(".validate").addEventListener("click", function (event) {
  validateEmail("email");
  event.preventDefault();
});
