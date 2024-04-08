// JavaScript for admin panel functionality

document.addEventListener('DOMContentLoaded', function () {
    const toggleSiteBtn = document.getElementById('toggleSiteBtn');
    let isSiteDown = false;

    toggleSiteBtn.addEventListener('click', function () {
        if (isSiteDown) {
            alert('Site is already up.');
        } else {
            const confirmUnpublish = confirm('Are you sure you want to unpublish the site?');
            if (confirmUnpublish) {
                alert('Site is now down.');
                isSiteDown = true;
            }
        }
    });
});
