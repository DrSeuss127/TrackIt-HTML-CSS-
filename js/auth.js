//Initialize an empty array for storing the users
let users = [];

function registerUser() {
  //Get the username and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //Check if the username is already taken
  if (users.includes(username)) {
    alert("Username already taken!");
    return;
  }

  //Add the user to the array
  users.push(username);

  //Store the username and password in the local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  //Redirect to the login page
  alert("Registration Successful!");
  window.location.href = "/html/index.html";
}

function loginUser() {
  //Get the username and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //Check if the username and password are correct
  if (
    username != localStorage.getItem("username") ||
    password != localStorage.getItem("password")
  ) {
    alert("Incorrect username or password!");
    window.location.href = "index.html";
    return;
  } else {
    if (
      username == localStorage.getItem("username") ||
      password == localStorage.getItem("password")
    ) {
      //Redirect to the home page
      window.location.href = "/html/menu.html";
    }
  }
}

function logoutUser() {
  //Redirect to the login page
  window.location.href = "/html/index.html";
}
