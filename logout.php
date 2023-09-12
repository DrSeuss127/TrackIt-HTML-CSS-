<?php
session_start(); // Start or resume the session

// Unset and destroy the session to log the user out
session_unset();
session_destroy();

header("Location: https://127.0.0.1/Trackit-HTML-CSS-/html/index.html"); // Redirect to the login page after logout
exit;
?>
