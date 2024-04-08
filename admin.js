// JavaScript for admin login functionality

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('adminForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === '1212') {
            const ipToBan = prompt('Enter IP address to ban:');
            if (ipToBan) {
                alert('IP address ' + ipToBan + ' has been banned.');
            } else {
                alert('No IP address entered.');
            }
        } else {
            alert('Incorrect password. Access denied.');
        }
    });
});
