const API_KEY = "AIzaSyDRY84xtRKBJyM1J-_llWS0KhbjSRQF3qs";
const VIDEO_ID = "IK0XWNi1Vno"; // Example video ID

function loadVideo() {
    fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`
    )
        .then((response) => response.json())
        .then((data) => {
            const video = data.items[0];
            if (video) {
                // Get the existing iframe element
                const iframe = document.querySelector(".video");

                // Update the src attribute of the iframe
                iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}`;
                iframe.allowFullscreen = true;
            } else {
                console.error("Video not found");
            }
        })
        .catch((error) => {
            console.error("Error fetching video data:", error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Load video when the page loads
window.onload = loadVideo;
