// Update result display when slider is moved
document.querySelectorAll(".slider").forEach(slider => {
    slider.addEventListener("input", function() {
        this.parentElement.nextElementSibling.querySelector(".result").textContent = this.value;
    });
});

// Handle file upload when folder icon is clicked
document.querySelectorAll(".folder-icon").forEach(icon => {
    icon.addEventListener("click", function() {
        this.nextElementSibling.click(); // Opens file dialog
    });
});
