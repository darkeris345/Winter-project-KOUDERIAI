const nameInput = document.getElementById("name");
const companyInput = document.getElementById("company_name");
const checkedBox = document.getElementById("check");

function validateEmail(emailId, titleId, messageId) {
  // Elements for valdiation
  const emailInput = document.getElementById(emailId);
  const titleInput = document.getElementById(titleId);
  const messageInput = document.getElementById(messageId);
  const emailValue = emailInput.value;
  const titleValue = titleInput.value;
  const messageValue = messageInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    emailValue.trim() !== "" &&
    titleValue.trim() === "" &&
    messageValue.trim() === ""
  ) {
    //   Changing title input field to error message
    titleInput.placeholder = "This field must be filled";
    titleInput.classList.add("error__placeholder");
    titleInput.style.opacity = 0.5;
    titleInput.style.borderBottomColor = "#F00";
    //   Changing message input field to error message
    messageInput.placeholder = "This field must be filled";
    messageInput.classList.add("error__placeholder");
    messageInput.style.opacity = 0.5;
    messageInput.style.borderBottomColor = "#F00";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
      titleInput.style.opacity = 1;
      titleInput.classList.remove("error__placeholder");

      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
      messageInput.style.opacity = 1;
      messageInput.classList.remove("error__placeholder");
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() === ""
  ) {
    emailInput.placeholder = "This field must be filled";
    emailInput.classList.add("error__placeholder");
    emailInput.style.opacity = 0.5;
    emailInput.style.borderBottomColor = "#F00";

    messageInput.placeholder = "This field must be filled";
    messageInput.classList.add("error__placeholder");
    messageInput.style.opacity = 0.5;
    messageInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";
      emailInput.style.opacity = 1;
      emailInput.classList.remove("error__placeholder");

      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
      messageInput.style.opacity = 1;
      messageInput.classList.remove("error__placeholder");
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() === "" &&
    messageValue.trim() !== ""
  ) {
    emailInput.placeholder = "This field must be filled";
    emailInput.classList.add("error__placeholder");
    emailInput.style.opacity = 0.5;
    emailInput.style.borderBottomColor = "#F00";

    titleInput.placeholder = "This field must be filled";
    titleInput.classList.add("error__placeholder");
    titleInput.style.opacity = 0.5;
    titleInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      emailInput.classList.remove("error__placeholder");
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";
      emailInput.style.opacity = 1;

      titleInput.classList.remove("error__placeholder");
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
      titleInput.style.opacity = 1;
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() === "" &&
    messageValue.trim() === ""
  ) {
    emailInput.placeholder = "This field must be filled";
    emailInput.classList.add("error__placeholder");
    emailInput.style.opacity = 0.5;
    emailInput.style.borderBottomColor = "#F00";

    titleInput.placeholder = "This field must be filled";
    titleInput.classList.add("error__placeholder");
    titleInput.style.opacity = 0.5;
    titleInput.style.borderBottomColor = "#F00";

    messageInput.placeholder = "This field must be filled";
    messageInput.classList.add("error__placeholder");
    messageInput.style.opacity = 0.5;
    messageInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      emailInput.classList.remove("error__placeholder");
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";
      emailInput.style.opacity = 1;

      titleInput.classList.remove("error__placeholder");
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
      titleInput.style.opacity = 1;

      messageInput.classList.remove("error__placeholder");
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
      messageInput.style.opacity = 1;
    }, 3000);
    return;
  } else if (
    emailValue.trim() !== "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() === ""
  ) {
    messageInput.placeholder = "This field must be filled";
    messageInput.classList.add("error__placeholder");
    messageInput.style.opacity = 0.5;
    messageInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      messageInput.classList.remove("error__placeholder");
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
      messageInput.style.opacity = 1;
    }, 3000);
    return;
  } else if (
    emailValue.trim() !== "" &&
    titleValue.trim() === "" &&
    messageValue.trim() !== ""
  ) {
    titleInput.placeholder = "This field must be filled";
    titleInput.classList.add("error__placeholder");
    titleInput.style.opacity = 0.5;
    titleInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      titleInput.classList.remove("error__placeholder");
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
      titleInput.style.opacity = 1;
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() !== ""
  ) {
    emailInput.placeholder = "This field must be filled";
    emailInput.classList.add("error__placeholder");
    emailInput.style.opacity = 0.5;
    emailInput.style.borderBottomColor = "#F00";

    setTimeout(() => {
      emailInput.classList.remove("error__placeholder");
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";
      emailInput.style.opacity = 1;
    }, 3000);
    return;
  }

  if (emailRegex.test(emailValue)) {
    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    checkedBox.checked = false;

    alert("We've got your message and sent instructions to your email. 😃");
  } else {
    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    checkedBox.checked = false;
    alert("Invalid email! Please try again. 🤔");
  }
}
document
  .querySelector(".validate_form")
  .addEventListener("click", function (event) {
    validateEmail("form_email", "form_title", "form_message");
    event.preventDefault();
  });
