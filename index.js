function processScheduling() {


 validateValues();

};

function validateValues() {
 let userFirstName = document.getElementById("userFirstName").value;

 let userLastName = document.getElementById("userLastName").value;

 let userAddress = document.getElementById("userAddress").value;

 let userTelephone = document.getElementById("userTelephone").value;

 let userEmail = document.getElementById("userEmail").value;

 let userPreferredDateAndTime = document.getElementById("userPreferredDateAndTime").value
  let moreDetails = document.getElementById("moreDetails").value;
 let consultationPurpose = document.getElementById("consultationPurpose").value;
  let careerConsultantsList = document.getElementById("careerConsultantsList").value;
  let growthConsultantsList = document.getElementById("growthConsultantsList").value;
  let changeOfProfessionConsultantsList = document.getElementById("changeOfProfessionConsultantsList").value;

 if (userFirstName === "") {
  let userFirstNameError = document.getElementById("userFirstNameError");
  userFirstNameError.textContent = "First Name Required";
  userFirstNameError.style.color = "red"
  userFirstNameError.style.border = "1px solid red";
  error = true;
  return false
 } 
 if (userFirstName.length <=1) {
  let userFirstNameError = document.getElementById("userFirstNameError");
  userFirstNameError.textContent = "Input atlaest two characters";
  userFirstNameError.style.color = "red"
  userFirstNameError.style.border = "1px solid red";
  error = true;
  return false
 } 
 else if (!isNaN(userFirstName)) {
  let userFirstNameError = document.getElementById("userFirstNameError");
  userFirstNameError.textContent = "Number is not appropriate for this field";
  userFirstNameError.style.color = "red"
  userFirstNameError.style.border = "1px solid red";
  error = true;
  return false;
 }
 else{
  let userFirstNameError = document.getElementById("userFirstNameError");
  userFirstNameError.textContent = "✔";
  userFirstNameError.style.color = "green";
  userFirstNameError.style.border = "1px solid white";
  error = false;
 }
 if (userLastName === "") {
  let userLastNameError = document.getElementById("userLastNameError");
  userLastNameError.textContent = "Last Name Required";
  userLastNameError.style.color = "red"
  userLastNameError.style.border = "1px solid red";
  error = true;
  return false
 }
 if (userLastName.length <= 1) {
  let userLastNameError = document.getElementById("userLastNameError");
  userLastNameError.textContent = "Input atlaest two characters";
  userLastNameError.style.color = "red"
  userLastNameError.style.border = "1px solid red";
  error = true;
  return false
 }
 else if (!isNaN(userLastName)) {
  let userLastNameError = document.getElementById("userLastNameError");
  userLastNameError.textContent = "Number is not appropriate for this field";
  userLastNameError.style.color = "red"
  userLastNameError.style.border = "1px solid red";
  error = true;
  return false
}
 else {
  let userLastNameError = document.getElementById("userLastNameError");
  userLastNameError.textContent = "✔";
  userLastNameError.style.color = "green";
  userLastNameError.style.border = "1px solid white";
  error = false;
 }
 if (userTelephone == "") {
  let userTelPhoneError = document.getElementById("userTelPhoneError");
  userTelPhoneError.textContent = "Telephone feild can not be empty";
  userTelPhoneError.style.color = "red"
  userTelPhoneError.style.border = "1px solid red";
  error = true;
  return false
 }
 else if (isNaN(userTelephone)) {
  let userTelPhoneError = document.getElementById("userTelPhoneError");
  userTelPhoneError.textContent = " Numbers alone are allowed";
  userTelPhoneError.style.color = "red"
  userTelPhoneError.style.border = "1px solid red";
  error = true;
  return false
}
 else {
   let userTelPhoneError = document.getElementById("userTelPhoneError");
    userTelPhoneError.textContent = "✔";
    userTelPhoneError.style.color = "green";
   userTelPhoneError.style.border = "1px solid white";
    error = false;
  }
  if (userTelephone.length < 7 || userTelephone.length > 15) {
    let userTelPhoneError = document.getElementById("userTelPhoneError");
    userTelPhoneError.textContent = "Invalid length";
    userTelPhoneError.style.color = "red"
    userTelPhoneError.style.border = "1px solid red";
    error = true;
    return false
  }
  if (userEmail == "") {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "Email can not be blank";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
if (userEmail.indexOf(" ") !== -1){
  let userEmailError = document.getElementById("userEmailError");
  userEmailError.textContent = "A valid email does not contain space";
  userEmailError.style.color = "red"
  userEmailError.style.border = "1px solid red";
  error = true;
  return false
}
  if (userEmail.indexOf("@") == -1) {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "@ symbol required";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
  if (userEmail.indexOf("@") <= 0) {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "Invalid position of @ symbol";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
  if (userEmail.indexOf(".") <= -1) {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "Invalid email format";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
    if (userEmail.indexOf(".") <= 0) {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "Invalid email format";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
  else if (userEmail.indexOf(".") - userEmail.indexOf("@") < 2 || userEmail.indexOf(".") > userEmail.length -3 ) {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "Invalid email format";
    userEmailError.style.color = "red"
    userEmailError.style.border = "1px solid red";
    error = true;
    return false
  }
  else {
    let userEmailError = document.getElementById("userEmailError");
    userEmailError.textContent = "✔";
    userEmailError.style.color = "green";
    userEmailError.style.border = "1px solid white";
    error = false;
  }
  if (userAddress === "") {
    let userAddressError = document.getElementById("userAddressError");
    userAddressError.textContent = "Enter your address";
    userAddressError.style.color = "red"
    userAddressError.style.border = "1px solid red";
    error = true;
    return false;
  }
  if (!isNaN(userAddress)) {
    let userAddressError = document.getElementById("userAddressError");
  userAddressError.textContent = "Number alone is not appropriate for this field";
 userAddressError.style.color = "red"
  userAddressError.style.border = "1px solid red";
  error = true;
  return false;
 }
 if (userAddress.length < 5) {
    let userAddressError = document.getElementById("userAddressError");
  userAddressError.textContent = "Invalid address";
 userAddressError.style.color = "red"
  userAddressError.style.border = "1px solid red";
  error = true;
  return false;
 }
  else if (userAddress == "") {
    let userAddressError = document.getElementById("userAddressError");
    userAddressError.textContent = "Address can not be empty";
    userAddressError.style.color = "red"
    userAddressError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let userAddressError = document.getElementById("userAddressError");
    userAddressError.textContent = "✔";
    userAddressError.style.color = "green";
    userAddressError.style.border = "1px solid white";
    error = false;
  }
  if (userPreferredDateAndTime == ""){
    let datetimeLocalError = document.getElementById("datetimeLocalError");
    datetimeLocalError.textContent = "Select a valid date";
    datetimeLocalError.style.color = "red"
    datetimeLocalError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let datetimeLocalError = document.getElementById("datetimeLocalError");
    datetimeLocalError.textContent = "✔";
    datetimeLocalError.style.color = "green";
    datetimeLocalError.style.border = "1px solid white";
    error = false;
  }
  if (document.getElementById("consultationPurpose").selectedIndex == 0){
    let consultationError = document.getElementById("consultationError");
    consultationError.textContent = "Select area for counselling ";
    consultationError.style.color = "red"
    consultationError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let consultationError = document.getElementById("consultationError");
    consultationError.textContent = "✔";
    consultationError.style.color = "green";
    consultationError.style.border = "1px solid white";
    error = false;
  }
  if (document.getElementById("careerConsultantsList").selectedIndex == 0) {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "You have to choose a counselor ";
    changeOfProfessionConsultantsListError.style.color = "red"
    changeOfProfessionConsultantsListError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "✔";
    changeOfProfessionConsultantsListError.style.color = "green";
    changeOfProfessionConsultantsListError.style.border = "1px solid white";
    error = false;
  }
  if (document.getElementById("growthConsultantsList").selectedIndex == 0) {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "You have to choose a counselor ";
    changeOfProfessionConsultantsListError.style.color = "red"
    changeOfProfessionConsultantsListError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "✔";
    changeOfProfessionConsultantsListError.style.color = "green";
    changeOfProfessionConsultantsListError.style.border = "1px solid white";
    error = false;
  }
  if (document.getElementById("changeOfProfessionConsultantsList").selectedIndex == 0) {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "You have to choose a counselor ";
    changeOfProfessionConsultantsListError.style.color = "red"
    changeOfProfessionConsultantsListError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let changeOfProfessionConsultantsListError = document.getElementById("changeOfProfessionConsultantsListError");
    changeOfProfessionConsultantsListError.textContent = "✔";
    changeOfProfessionConsultantsListError.style.color = "green";
    changeOfProfessionConsultantsListError.style.border = "1px solid white";
    error = false;
  }
  if (moreDetails === "") {
    let moreDetailsError = document.getElementById("moreDetailsError");
    moreDetailsError.textContent = "Required";
    moreDetailsError.style.color = "red"
    moreDetailsError.style.border = "1px solid red";
    error = true;
    return false
  }
  if (moreDetails.length <= 1) {
    let moreDetailsError = document.getElementById("moreDetailsError");
    moreDetailsError.textContent = "Input atlaest three characters";
    moreDetailsError.style.color = "red"
    moreDetailsError.style.border = "1px solid red";
    error = true;
    return false
  }
  else if (!isNaN(moreDetails)) {
    let moreDetailsError = document.getElementById("moreDetailsError");
    moreDetailsError.textContent = "Number is not appropriate for this field";
    moreDetailsError.style.color = "red"
    moreDetailsError.style.border = "1px solid red";
    error = true;
    return false;
  }
  else {
    let moreDetailsError = document.getElementById("moreDetailsError");
    moreDetailsError.textContent = "✔";
    moreDetailsError.style.color = "green";
    moreDetailsError.style.border = "1px solid white";
    error = false;
  }
  
    const summaryOfSchedule = document.getElementById("summaryOfSchedule").value
  summaryOfSchedule.textContent=`the difference between them is ${userFirstName} days.`
}


  function counsellorsByPurpose() {
    
    let consultationPurpose = document.getElementById("consultationPurpose").value;
    let careerConsultantsList = document.getElementById("careerConsultantsList");
    let growthConsultantsList = document.getElementById("growthConsultantsList");
    let changeOfProfessionConsultantsList = document.getElementById("changeOfProfessionConsultantsList")
    if (consultationPurpose === "career") {
      careerConsultantsList.classList.remove("careerConsultantsList");
    } else {
      careerConsultantsList.classList.add("careerConsultantsList");
    }
    if (consultationPurpose === "growth") {
      growthConsultantsList.classList.remove("growthConsultantsList");
    } else {
 
      growthConsultantsList.classList.add("growthConsultantsList");
    }
    if (consultationPurpose === "changeOfProffession") {

      changeOfProfessionConsultantsList.classList.remove("changeOfProfessionConsultantsList");
    } else {
      changeOfProfessionConsultantsList.classList.add("changeOfProfessionConsultantsList");
    }
} 