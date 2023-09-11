    // JavaScript code to handle button click event
document.getElementById("login").addEventListener("click", function() {
    // Redirect to the second HTML file
    window.location.href = "/html/menu.html";
});


function validation(){
    var userNames = document.getElementById("username").value;
    var passwords = document.getElementById("password").value;

    if(userNames.length=="" && passwords.length==""){
        alert("Please input your username and password.")
        return false;
    }
}