document.addEventListener("DOMContentLoaded", function () {
    const ytButton = document.querySelector(".zen-youtube-essential");
    if (!ytButton) return;

    // Create media controls container
    const controls = document.createElement("div");
    controls.classList.add("zen-media-controls");

    // Play/Pause Button
    const playPauseBtn = document.createElement("button");
    playPauseBtn.innerText = "▶️ / ⏸️";
    playPauseBtn.onclick = function () {
        const video = document.querySelector("video");
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    // Back Button
    const backBtn = document.createElement("button");
    backBtn.innerText = "⏪";
    backBtn.onclick = function () {
        const video = document.querySelector("video");
        if (video) video.currentTime -= 10; // Go back 10 seconds
    };

    // Forward Button
    const forwardBtn = document.createElement("button");
    forwardBtn.innerText = "⏩";
    forwardBtn.onclick = function () {
        const video = document.querySelector("video");
        if (video) video.currentTime += 10; // Skip forward 10 seconds
    };

    // Append buttons to control bar
    controls.appendChild(backBtn);
    controls.appendChild(playPauseBtn);
    controls.appendChild(forwardBtn);

    // Add controls to YouTube Essential Button
    ytButton.appendChild(controls);
});
