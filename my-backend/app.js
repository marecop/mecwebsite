document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://your-heroku-backend-url/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.token) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
        // Redirect to dashboard or home page
    } else {
        alert('Invalid credentials');
    }
});
