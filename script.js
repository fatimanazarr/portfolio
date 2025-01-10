var themeIcon = document.getElementById("themeicon");
        
themeIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = "assets/sun.svg"; // Switch to sun icon for light mode
    } else {
        themeIcon.src = "assets/moon.svg"; // Switch back to moon icon for dark mode
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".categories ul li");
    const projectCards = document.querySelectorAll(".projectCard");

    categories.forEach(category => {
        category.addEventListener("click", function () {
            const selectedCategory = this.textContent.trim();

            // Remove 'active' class from all categories
            categories.forEach(cat => cat.classList.remove("active"));

            // Add 'active' class to the clicked category
            this.classList.add("active");

            // Show/Hide projects based on category
            projectCards.forEach(card => {
                if (selectedCategory === "All" || card.dataset.category === selectedCategory) {
                    card.style.display = "block"; // Show matching projects
                } else {
                    card.style.display = "none"; // Hide non-matching projects
                }
            });
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents actual form submission

    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());

    // Set popup message content
    document.getElementById("popupMessage").innerHTML = `
        <h4>Thank You, ${formValues.name}!</h4>
        <p>Your request for <strong>${formValues.service}</strong> has been received.</p>
    `;

    // Show the popup
    document.getElementById("popup").classList.add("show");

    // Optional: Reset the form
    this.reset();
});

// Close popup when clicking the close button
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("show");
});
