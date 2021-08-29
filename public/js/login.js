document
.querySelector('.login-form');


const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                let result = await response.json()
                alert(result.message)
            }
        }
    };

document.addEventListener('submit', LoginFormHandler);