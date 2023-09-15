function logoutUser(){
    document.addEventListener('DOMContentLoaded', function () {
        const logoutButton = document.getElementById('logoutButton');
    
        logoutButton.addEventListener('click', function () {
            // Clear user data from localStorage
            localStorage.clear();
    
            // Redirect to the login page
            window.location.href = 'https://127.0.0.1/Trackit-HTML-CSS-/html/index.html';
        });
    });
}
