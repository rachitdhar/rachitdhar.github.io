const API_URL = "https://unified-jennet-mildly.ngrok-free.app/api";
const loader = document.querySelector('.loader-overlay');

const post_title = document.querySelector(".post-title");
const textarea = document.querySelector(".post-content");

const autoResize = () => {
    textarea.style.height = 'auto'; // Reset height to calculate new scrollHeight
    textarea.style.height = Math.max(textarea.scrollHeight, window.innerHeight) + 'px';
};
textarea.addEventListener('input', autoResize);

// auto-resize on page load if textarea has preset value
window.addEventListener('load', autoResize);

function submit() {
    
}