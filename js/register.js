//Password validation
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validation(){
  var username = document.registerForm.username.value;
  var password = document.registerForm.password.value;

  if(username.length=="" && password.length=="") {  
      alert("Username and Password fields are empty.");  
      return false;  
  }  
  else{
      if(username.length==""){
          alert("Username is empty.");
          return false;
      }

      if(password.length=""){
          alert("Password cannot be blank.");
          return false;
      }

      if(username.length!="" && password.length!=""){
        alert('Registration successful!');
        return true
      }
  }
}

//Registration backend
function registerUser(){
  document.addEventListener('DOMContentLoaded', function () {
      const registerButton = document.getElementById('register');
    
      //OnClick function for grabbing the values of the username and password form fields
      registerButton.addEventListener('click', function () {
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
    
          // Simulate password hashing (not secure, for demonstration purposes only)
          const hashedPassword = btoa(password);
    
          // Store user data in localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('password', hashedPassword);
    
          // Redirect to the desired page
          alert('Registration Successful!');
          window.location.href = 'https://127.0.0.1/TrackIt-HTML-CSS-/html/index.html';
      });
  });
}