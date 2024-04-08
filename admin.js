// JavaScript for admin login functionality

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('adminForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === '1212') {
            window.location.href = 'admin-panel.html'; // Redirect to admin panel
        } else {
            alert('Incorrect password. Access denied.');
        }
    });
});
