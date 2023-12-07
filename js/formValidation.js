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
    titleInput.value = "This field must be filled";
    titleInput.style.color = "red";
    titleInput.style.borderBottomColor = "red";
    //   Changing message input field to error message
    messageInput.value = "This field must be filled";
    messageInput.style.color = "red";
    messageInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      titleInput.value = "";
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";

      messageInput.value = "";
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() === ""
  ) {
    //   Changing email input field to error message
    emailInput.value = "This field must be filled";
    emailInput.style.color = "red";
    emailInput.style.borderBottomColor = "red";
    //   Changing message input field to error message
    messageInput.value = "This field must be filled";
    messageInput.style.color = "red";
    messageInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";

      messageInput.value = "";
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() === "" &&
    messageValue.trim() !== ""
  ) {
    //   Changing email input field to error message
    emailInput.value = "This field must be filled";
    emailInput.style.color = "red";
    emailInput.style.borderBottomColor = "red";
    //   Changing title input field to error message
    titleInput.value = "This field must be filled";
    titleInput.style.color = "red";
    titleInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";

      titleInput.value = "";
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() === "" &&
    messageValue.trim() === ""
  ) {
    //   Changing email input field to error message
    emailInput.value = "This field must be filled";
    emailInput.style.color = "red";
    emailInput.style.borderBottomColor = "red";
    //   Changing title input field to error message
    titleInput.value = "This field must be filled";
    titleInput.style.color = "red";
    titleInput.style.borderBottomColor = "red";
    //   Changing message input field to error message
    messageInput.value = "This field must be filled";
    messageInput.style.color = "red";
    messageInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";

      titleInput.value = "";
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";

      messageInput.value = "";
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() !== "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() === ""
  ) {
    //   Changing message input field to error message
    messageInput.value = "This field must be filled";
    messageInput.style.color = "red";
    messageInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      messageInput.value = "";
      messageInput.style.color = "#36536B";
      messageInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() !== "" &&
    titleValue.trim() === "" &&
    messageValue.trim() !== ""
  ) {
    //   Changing title input field to error message
    titleInput.value = "This field must be filled";
    titleInput.style.color = "red";
    titleInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      titleInput.value = "";
      titleInput.style.color = "#36536B";
      titleInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  } else if (
    emailValue.trim() === "" &&
    titleValue.trim() !== "" &&
    messageValue.trim() !== ""
  ) {
    //   Changing email input field to error message
    emailInput.value = "This field must be filled";
    emailInput.style.color = "red";
    emailInput.style.borderBottomColor = "red";

    // This part of code get chagned inputs to default state
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "#36536B";
      emailInput.style.borderBottomColor = "#36536B";
    }, 3000);
    return;
  }

  if (emailRegex.test(emailValue)) {
    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    checkedBox.value = "unchecked";

    alert("We've got your message and sent instructions to your email. 😃");
  } else {
    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    checkedBox.value = "unchecked";
    alert("Invalid email! Please try again. 🤔");
  }
}
document
  .querySelector(".validate_form")
  .addEventListener("click", function (event) {
    validateEmail("form_email", "form_title", "form_message");
    event.preventDefault();
  });
