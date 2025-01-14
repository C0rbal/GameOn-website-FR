function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSpan = document.querySelectorAll(".close");

const sendButton = document.getElementById('submit');
const form = document.getElementById('form');

const firstNameInput = document.getElementById('first');
const firstNameInputError = document.getElementById('error-first');
const lastNameInput = document.getElementById('last');
const lastNameInputError = document.getElementById('error-last');
const emailInput = document.getElementById('email');
const emailInputError = document.getElementById('error-email');
const birthdateInput = document.getElementById('birthdate');
const birthdateInputError = document.getElementById('error-birthdate');
const quantityInput = document.getElementById('quantity');
const quantityInputError = document.getElementById('error-quantity');
const location1Input = document.getElementById('location1');
const location2Input = document.getElementById('location2');
const location3Input = document.getElementById('location3');
const location4Input = document.getElementById('location4');
const location5Input = document.getElementById('location5');
const location6Input = document.getElementById('location6');
const locationInputError = document.getElementById('error-location');
const checkbox1Input = document.getElementById('checkbox1');
const checkbox1InputError = document.getElementById('error-checkbox1');

let isFirstValid = false;
let isLastValid = false;
let isEmailValid = false;
let isBirthdateValid = false;
let isQuantityValid = false;
let isLocationValid = false;
let isCguValid = false;

const validationText = document.querySelector(".validation-text");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalSpan.forEach((span) => span.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  validationText.style.display = "none";
}

// close modal event outside the form
window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  } else if (event.target == validationText) {
    validationText.style.display = "none";
  }
}

// Registration form

// REGEX, expressions régulières
const regexFirst = /^[a-zA-Z]+[a-zA-Z-]?[a-zA-Z]+$/;
const regexLast = /^[a-zA-Z]+[a-zA-Z'-]?[a-zA-Z]+$/;
const regexEmail = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
const regexBirthdate = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
const regexQuantity = /^[0-9][0-9]?$/;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Firstname input 
  if (firstNameInput.value.trim().length < 2) {
    firstNameInput.style.border = "2px solid red";
    firstNameInputError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
   } else if ( regexFirst.test(firstNameInput.value.trim()) == false) {
    firstNameInput.style.border = "2px solid red";
    firstNameInputError.textContent = "Veuillez vous assurer que le champ respecte les valeurs définies.";
   } else {
      firstNameInput.style.border = "2px solid green";
      firstNameInputError.textContent = "";
      isFirstValid = true;
  }

  // Lastname input 
  if (lastNameInput.value.trim().length < 2) {
    lastNameInput.style.border = "2px solid red";
    lastNameInputError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
   } else if ( regexLast.test(lastNameInput.value.trim()) == false) {
    lastNameInput.style.border = "2px solid red";
    lastNameInputError.textContent = "Veuillez vous assurer que le champ respecte les valeurs définies.";
   } else {
      lastNameInput.style.border = "2px solid green";
      lastNameInputError.textContent = "";
      isLastValid = true;
  }

  // Email input 
  if (emailInput.value.trim().length < 1) {
    emailInput.style.border = "2px solid red";
    emailInputError.textContent = "Vous devez saisir au moins 2 caractères.";
   } else if (regexEmail.test(emailInput.value.trim()) == false && (emailInput.indexOf("@")>=0) && (emailInput.indexOf(".")>=0)) {
    emailInput.style.border = "2px solid red";
    emailInputError.textContent = "Email non valide.";
   } else {
    emailInput.style.border = "2px solid green";
    emailInputError.textContent = "";
    isEmailValid = true;
  }

  // Birthdate input 
  if(regexBirthdate.test(birthdateInput.value.trim()) == false) {
    birthdateInput.style.border = "2px solid red";
    birthdateInputError.textContent = "Vous devez entrer votre date de naissance.";
   } else {
    birthdateInput.style.border = "2px solid green";
    birthdateInputError.textContent = "";
    isBirthdateValid = true;
  }

  // Quantity of events input 
  if(regexQuantity.test(quantityInput.value.trim()) == false) {
    quantityInput.style.border = "2px solid red";
    quantityInputError.textContent = "Veuillez saisir une valeur numérique.";
   } else {
    quantityInput.style.border = "2px solid green";
    quantityInputError.textContent = "";
    isQuantityValid = true;
  }

  // Location of the future event input 
  if(location1Input.checked || location2Input.checked || location3Input.checked || location4Input.checked || location5Input.checked || location6Input.checked) {
    locationInputError.textContent = "";
    isLocationValid = true;
   } else {
    locationInputError.textContent = "Vous devez choisir une option.";
  }

  // Conditions input 
  if(checkbox1Input.checked == false) {
    checkbox1InputError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
   } else {
    checkbox1InputError.textContent = "";
    isCguValid = true;
  }

  // Check the form
  if(isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isCguValid) {
    validationMessage();
  }

});

// Validation message
function validationMessage() {
  modalbg.style.display = "none";
  validationText.style.display = "block";

  // reset the form
  form.reset();

  // refresh the form css
  timeFunction();
}

// refresh the page after 5 seconds
function timeFunction() {
  setTimeout(function(){
    location.reload();
  }, 5000);
}
