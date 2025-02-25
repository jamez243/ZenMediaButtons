document.addEventListener("DOMContentLoaded", function () {
    // Function to add media controls to the tab preview
    function injectMediaControls(preview) {
        if (!preview || preview.querySelector(".zen-media-controls")) return; // Avoid duplicates

        // Create media controls container
        const controls = document.createElement("div");
        controls.classList.add("zen-media-controls");

        // Play/Pause Button
        const playPauseBtn = document.createElement("button");
        playPauseBtn.innerText = "▶️ / ⏸️";
        playPauseBtn.onclick = function () {
            let video = document.querySelector("video") || document.querySelector("audio");
            if (video) {
                video.paused ? video.play() : video.pause();
            }
        };

        // Back Button
        const backBtn = document.createElement("button");
        backBtn.innerText = "⏪";
        backBtn.onclick = function () {
            let video = document.querySelector("video") || document.querySelector("audio");
            if (video) video.currentTime -= 10; // Go back 10 seconds
        };

        // Forward Button
        const forwardBtn = document.createElement("button");
        forwardBtn.innerText = "⏩";
        forwardBtn.onclick = function () {
            let video = document.querySelector("video") || document.querySelector("audio");
            if (video) video.currentTime += 10; // Skip forward 10 seconds
        };

        // Append buttons to control bar
        controls.appendChild(backBtn);
        controls.appendChild(playPauseBtn);
        controls.appendChild(forwardBtn);

        // Inject media controls into the preview popup
        preview.appendChild(controls);
    }

    // MutationObserver to detect when a tab preview appears
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.matches(".tab-preview-container")) {
                    injectMediaControls(node);
                }
            });
        });
    });

    // Start observing the document for tab previews
    observer.observe(document.body, { childList: true, subtree: true });
});
