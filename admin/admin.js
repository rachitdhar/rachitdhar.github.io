const API_URL = "https://unified-jennet-mildly.ngrok-free.app/api";
const loader = document.querySelector('.loader-overlay');

function login() {
    loader.style.display = 'flex';

    const userid = document.getElementById("username").value;
    const passw = document.getElementById("password").value;

    fetch(`${API_URL}/auth`, {
        method: 'POST',
        credentials: 'include', // to be able to receive the auth token
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
            userid: userid,
            password: passw
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        window.location.href('index.html');
    })
    .catch(error => {
        console.error('POST Error: ', error);
        loader.style.display = 'none';
        toastr.error('Authentication failed', 'Error');
    });
}