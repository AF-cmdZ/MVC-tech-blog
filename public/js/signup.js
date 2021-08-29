document
.querySelector('.signup-form');


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
            if (response.ok) {
                alert('Account Created!');
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText)
            }
        }
};

document.addEventListener('submit', signupFormHandler);