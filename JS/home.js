/* const apiKey = "AIzaSyAUa1va6hFCjTYzd8GwWeBinsoaXXAxBAY";
const videoId = "agnrsaSxp-I"; // Replace with the actual video ID

async function fetchVideoDetails(apiKey, videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }
        const data = await response.json();
        displayVideoDetails(data.items[0]);
    } catch (error) {
        console.error(
            "There has been a problem with your fetch operation:",
            error
        );
    }
}

function displayVideoDetails(video) {
    document.getElementsByTagName(
        "ifream"
    )[0].setAttribute('src') = `https://www.youtube.com/watch?v=${video.id.videoId}`;
}

fetchVideoDetails(apiKey, videoId);
 */
