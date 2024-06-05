let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email  = document.getElementById('email');
let DOB = document.getElementById('DOB');
let phone = document.getElementById('phone');
let Address = document.getElementById('Address');
let city = document.getElementById('city');
let state = document.getElementById('state');

let myform = document.getElementById('form-List');
myform.addEventListener('submit', onSubmited);

// let myform1 = document.getElementById('form-List');
// myform1.addEventListener('click', displayOut);

function onSubmited(e){
e.preventDefault();

console.log(firstname.value,'firstname');

if(validateValue()){

    // document.getElementById("output1").innerHTML =`${firstname.value} ${lastname.value}`,
    // document.getElementById("output2").textContent = email.value,
    // document.getElementById("output3").textContent = DOB.value,
    // document.getElementById("output4").textContent = phone.value,
    // document.getElementById("output5").textContent = Address.value,
    // document.getElementById("output6").textContent = city.value,
    // document.getElementById("output7").textContent = state.value

    if(confirm(popUp())){

    }

}
}

function validateValue(){

    let isValid = true;

    const isValidEmail = (email)=> {
        // we use regular impression to check the email
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

  let firstnameError = document.getElementById("firstname-error");
  let lastNameError = document.getElementById("lastname-error");
  let emailError = document.getElementById("email-error");
  let DOBError = document.getElementById("DOB-error");
  let PhoneError = document.getElementById("phone-error");
  let AddressError = document.getElementById("address-error");
  let CityError = document.getElementById("city-error");
  let StateError = document.getElementById("state-error");

firstnameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  DOBError.textContent = "";
  PhoneError.textContent = "";
  AddressError.textContent = "";
  CityError.textContent = "";
  StateError.textContent = "";

  if (firstname.value === "" || /\d/.test(firstname.value) ) {
    firstnameError.textContent = "Please enter your first name.";
    isValid = false;
  }

  if (lastname.value === "" || /\d/.test(lastname.value)) {
    lastNameError.textContent = "Please enter your last name.";
    isValid = false;
  }

  if (email.value === "" || !isValidEmail(email.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (DOB.value === "") {
    DOBError.textContent = "Please enter your date of birth.";
    isValid = false;
  }

  if (phone.value === "") {
    PhoneError.textContent = "Please enter your phone number.";
    isValid = false;
  }

  if (Address.value === "") {
    AddressError.textContent = "Please enter your address.";
    isValid = false;
  }

  if (city.value === "") {
    CityError.textContent = "Please enter your city.";
    isValid = false;
  }

  if (state.value === "") {
    StateError.textContent = "Please enter your state.";
    isValid = false;
  }

return isValid;
}

let output = document.getElementById('output');
console.log(document.getElementsByClassName('box'));

function popUp()
{ 
   return output.innerHTML ="<h2>"+`${firstname.value} ${lastname.value}`+"</h2> <br> <h2>"
+email.value + "</h2> <br> <h2>"+DOB.value+"</h2> <br> <h2>"+phone.value+
"</h2> <br> <h2>" +Address.value+ "</h2> <br> <h2>" +city.value+ 
"</h2> <br> <h2>"+state.value+"</h2>"

  
}

function displayOut()
{
    
    
    
}