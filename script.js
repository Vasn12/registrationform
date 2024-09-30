//script.js
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate full name length
    if (fullName.length < 5) {
        console.log('Full name must be at least 5 characters.');
        return;
    }

    // Validate email format
    if (!email.includes('@')) {
        console.log('Enter a valid email address.');
        return;
    }
});
