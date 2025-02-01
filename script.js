

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll(".navbar a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Adjust offset for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section in the navbar
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.6 // Trigger when 60% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.navbar a[href='#${id}']`);

            if (entry.isIntersecting) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
        const fullname = document.getElementById("fullname").value.trim();
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!fullname || !dob || !email || !phone) {
            alert("Please fill out all required fields.");
            event.preventDefault(); // Prevent form submission
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        } else if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            event.preventDefault();
        }
    });

    // Dynamic year update in footer (if applicable)
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
