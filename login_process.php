<?php

session_start(); // Start or resume the session

// Connect to your database (replace these with your actual database credentials)
$host = "localhost";
$username = "root";
$password = "";
$database = "auth";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['login'])){
    // Retrieve user input from login form
    $username = $_POST['username'];
    $password = $_POST['password'];
}


// Check if the user exists in the database
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        //On login, set session variable to mark user as authenticated
        $_SESSION['user_authenticated'] = $username;
        $_SESSION['username'] = $username;  //username stored in session
        header("Location: https://127.0.0.1/Trackit-HTML-CSS-/html/menu.html");     //redirect to TrackIt menu
    } else {
        echo "Incorrect password.";
        header("Location: https://127.0.0.1/Trackit-HTML-CSS-/html/index.html");    //redirect to login
    }
} else {
    echo "User not found.";
}

$conn->close();
?>