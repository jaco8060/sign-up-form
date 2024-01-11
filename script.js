const submit = document.getElementById("submit");
submit.addEventListener("click", validation);

function validation(e) {
  const password = document.getElementById("password");
  const passwordHint = document.querySelector(".hidden.password");
  const confirmPassword = document.getElementById("confirm_password"); // not used in current validation logic
  const first_name = document.getElementById("first_name");
  const first_nameHint = document.querySelector(".hidden.first_name");
  const last_name = document.getElementById("last_name");
  const last_NameHint = document.querySelector(".hidden.last_name");
  const email = document.getElementById("email");
  const emailHint = document.querySelector(".hidden.email");
  const phone = document.getElementById("phone");
  const phoneHint = document.querySelector(".hidden.phone");

  let isFormValid = true;

  if (password.value.length == 0) {
    passwordHint.innerHTML = "*Required";
    passwordHint.classList.add("hintVisible");
    isFormValid = false;
  } else if (password.value.length < 8) {
    passwordHint.innerHTML = "Password must be at least 8 characters long.";
    passwordHint.classList.add("hintVisible");
    isFormValid = false;
  } else if (password.value != confirmPassword.value) {
    passwordHint.innerHTML = "Passwords must match";
    passwordHint.classList.add("hintVisible");
    isFormValid = false;
  } else {
    passwordHint.classList.remove("hintVisible");
  }

  if (email.value.length == 0) {
    emailHint.innerHTML = "*Required";
    emailHint.classList.add("hintVisible");
    isFormValid = false;
  } else {
    emailHint.classList.remove("hintVisible");
  }

  if (first_name.value.length == 0) {
    first_nameHint.innerHTML = "*Required";
    first_nameHint.classList.add("hintVisible");
    isFormValid = false;
  } else {
    first_nameHint.classList.remove("hintVisible");
  }

  if (last_name.value.length == 0) {
    last_NameHint.innerHTML = "*Required";
    last_NameHint.classList.add("hintVisible");
    isFormValid = false;
  } else {
    last_NameHint.classList.remove("hintVisible");
  }

  if (phone.value.length == 0) {
    phoneHint.innerHTML = "*Required";
    phoneHint.classList.add("hintVisible");
    isFormValid = false;
  } else {
    phoneHint.classList.remove("hintVisible");
  }

  // If any validation fails, prevent form submission
  if (!isFormValid) {
    e.preventDefault();
  }
}

const phone = document.getElementById("phone");
phone.addEventListener("input", formatPhoneNumber);

function formatPhoneNumber(event) {
  var input = event.target;
  var numbers = input.value.replace(/\D/g, "");
  var char = { 0: "(", 3: ") ", 6: "-" };
  input.value = "";

  for (var i = 0; i < numbers.length; i++) {
    input.value += (char[i] || "") + numbers[i];
  }

  // Update placeholder based on current input
  var placeholderNumbers = 10 - numbers.length; // total digits in phone number minus entered digits
  var placeholder =
    "(" + "-".repeat(Math.min(3, Math.max(0, placeholderNumbers)));

  if (placeholderNumbers > 3) {
    placeholder += ") " + "-".repeat(Math.min(3, placeholderNumbers - 3));
  } else {
    placeholder += ")";
  }

  if (placeholderNumbers > 6) {
    placeholder += " -" + "-".repeat(Math.max(0, placeholderNumbers - 6));
  }

  input.placeholder = placeholder;
}
