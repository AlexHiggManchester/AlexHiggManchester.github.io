// Handle file uploads
document.querySelectorAll(".folder-label").forEach(label => {
    const fileInput = label.querySelector(".file-upload");
    const fileNameDisplay = label.parentElement.querySelector(".file-name");

    label.addEventListener("click", function() {
        fileInput.click(); // Open file selection
    });

    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = fileInput.files[0].name; // Show file name
        }
    });
});
