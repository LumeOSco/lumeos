document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('adminForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === '1212') {
            shutdownWebsite(); // Shutdown the website
        } else {
            alert('Incorrect password. Access denied.');
        }
    });
});

function shutdownWebsite() {
    document.querySelector('body').innerHTML = '<h1>Website is currently down for maintenance.</h1>';
}
