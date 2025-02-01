

//function to create dark theme effect        
var themeIcon = document.getElementById("themeicon");
themeIcon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = "assets/sun.svg"; // Switch to sun icon for light mode
    } else {
        themeIcon.src = "assets/moon.svg"; // Switch back to moon icon for dark mode
    }
}

//function to handle hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        let nav = document.getElementById("nav-links");
        nav.classList.toggle("active");
    }

    document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);
});

//function to create a smooth scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get the ID (without #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height if needed
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hero-contact-btn").addEventListener("click", function () {
        const aboutSection = document.getElementById("about");

        if (aboutSection) {
            const sectionPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
            const windowHeight = window.innerHeight;
            const sectionHeight = aboutSection.offsetHeight;

            // Calculate position to bring the section to the middle
            const scrollToPosition = sectionPosition - (windowHeight / 2) + (sectionHeight / 2);

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Handle the Contact button click
    document.querySelector(".navbar-button").addEventListener("click", function () {
        const contactSection = document.getElementById("contact");
        
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start" // Scroll to the top of the section
            });
        }
    });
});

//Handle form submition
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