export const PersonInfo = {
    fullName: ``,
    email: ``,
    password: ``
}       


document.getElementById('signUpForm').addEventListener('submit', function(event) {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (fullName === '' || email === '' || password === '') {
        alert('Please fill in all fields for Sign Up.');
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    } else if (!isValidPassword(password)) {
        alert('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.');
        event.preventDefault();
    }

    PersonInfo.fullName = fullName;
    PersonInfo.email = email;
    PersonInfo.password = password;

});

// Function to validate email format using regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password using regex
function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
