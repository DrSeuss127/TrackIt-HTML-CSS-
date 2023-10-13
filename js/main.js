const loginForm = document.forms["loginForm"];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

//tite

  const username = loginForm.elements["username"].value;
  const password = loginForm.elements["password"].value;

  const userAccounts = JSON.parse(localStorage.getItem("users")) || [];

  const loggedInUser = userAccounts.find((user) => user.username === username && user.password === password);

  if (loggedInUser) {
    sessionStorage.setItem("loggedInUsername", loggedInUser.username);
    window.location.href = "/html/track.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

