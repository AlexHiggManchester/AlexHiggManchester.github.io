document.querySelectorAll(".slider").forEach(slider => {
    slider.addEventListener("input", function() {
        this.parentElement.nextElementSibling.querySelector(".result").textContent = this.value;
    });
});
