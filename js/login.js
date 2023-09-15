
function loginUser(){
    document.addEventListener('DOMContentLoaded', function () {
        const loginButton = document.getElementById('login');

        loginButton.addEventListener('click', function () {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulate password verification (not secure, for demonstration purposes only)
            // In a real application, this should be done on the server side.
            if (localStorage.getItem(username) === password) {

                // Store user authentication status in localStorage (not recommended for production)
                localStorage.setItem('user_authenticated', username);

                // Redirect to the desired page
                alert('Login successful!');
                window.location.href = '/html/menu.html';
            } else {
                alert('Incorrect username or password.');
            }
        });
    });
}