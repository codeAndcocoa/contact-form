"use strict";
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("email");
const enquiry = document.getElementById("enquiry");
const request = document.getElementById("request");
const message = document.getElementById("message");
const condition = document.getElementById("condition");
const submitBtn = document.querySelector(".submit-button");
const errorMsg = document.querySelector(".invalid-feedback");
const successMsg = document.querySelector(".toast");
let currentIndex = 0;
const inputsArr = [
  firstName,
  lastName,
  emailAddress,
  enquiry,
  request,
  message,
  condition,
  submitBtn,
];

const checkFirstname = () => {
  if(!firstName.value){
    firstName.closest('.cell').querySelector('.invalid-feedback').classList.add('d-block');
    firstName.classList.add('error-state');
    return false;
  }else{
    firstName.closest('.cell').querySelector('.invalid-feedback').classList.remove('d-block');
    firstName.classList.remove('error-state');
    return true;
  }
};
const checkLastname = () => {
  if(!lastName.value){
    lastName.closest('.cell').querySelectorAll('.invalid-feedback')[1].classList.add('d-block');
    lastName.classList.add('error-state');
    return false;
  }
else{
  lastName.closest('.cell').querySelectorAll('.invalid-feedback')[1].classList.remove('d-block');
  lastName.classList.remove('error-state');
  return true;
}
};
const checkEmail = () => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
 if(!emailAddress.value){
    emailAddress.closest('.cell').querySelector('.empty-field').classList.add('d-block');
    emailAddress.closest('.cell').querySelector('.wrong-format').classList.remove('d-block');
    emailAddress.classList.add('error-state');
    return false;
 
  }else if(!emailAddress.value.match(emailRegex)){
    emailAddress.closest('.cell').querySelector('.empty-field').classList.remove('d-block');
    emailAddress.closest('.cell').querySelector('.wrong-format').classList.add('d-block'); 
    emailAddress.classList.add('error-state');
    return false;

  }else{
    emailAddress.closest('.cell').querySelector('.empty-field').classList.remove('d-block');
    emailAddress.closest('.cell').querySelector('.wrong-format').classList.remove('d-block'); 
    emailAddress.classList.remove('error-state');
    return true;
  }
};
const checkInquiry = () => {
  if(!enquiry.checked && !request.checked){
    enquiry.closest('.cell').querySelector('.invalid-feedback').classList.add('d-block');
    return false;
  }else {
    enquiry.closest('.cell').querySelector('.invalid-feedback').classList.remove('d-block');
    return true;
  }
};
const checkMessage = ()=>{
  if(!message.value){
    message.closest('.cell').querySelector('.invalid-feedback').classList.add('d-block');
    message.classList.add('error-state');
return false;
  }else{
    message.closest('.cell').querySelector('.invalid-feedback').classList.remove('d-block');
    message.classList.remove('error-state');
    return true;
  }
}
const checkCondition = () => {
  if(!condition.checked){
    condition.closest('.cell').querySelector('.invalid-feedback').classList.add('d-block');
return false;
  }else{
    condition.closest('.cell').querySelector('.invalid-feedback').classList.remove('d-block');
return true;
  }
  
};


const showSuccess = () => {
  document.querySelector('.toast').classList.add('show');
};

if(submitBtn.focused){
    document.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            if(checkFirstname() && checkLastname() && checkEmail() && checkInquiry()&& checkMessage() && checkCondition()  ){
                showSuccess();
               } 
        }
    });
}
submitBtn.onclick = () => {
 if(checkFirstname() && checkLastname() && checkEmail() && checkInquiry()&& checkMessage() && checkCondition()  ){
  showSuccess();
 }
  
};



// Users should be able to:

// - Complete the form and see a success toast message upon successful submission
// - Receive form validation messages if:
//   - A required field has been missed
//   - The email address is not formatted correctly
// - Complete the form only using their keyboard
// - Have inputs, error messages, and the success message announced on their screen reader
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
