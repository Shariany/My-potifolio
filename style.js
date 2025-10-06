document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // 1. HAMBURGER MENU TOGGLE LOGIC
    // =========================================================
    // Ensure these IDs match the HTML:
    // <button class="hamburger" id="hamburger-button">
    // <ul class="nav-links" id="nav-links">
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerButton && navLinks) {
        // Log to confirm elements are found (you can check your browser console)
        console.log('Hamburger button and Nav links found. Attaching listener.'); 
        
        hamburgerButton.addEventListener('click', () => {
            // This toggles the 'active' class which the CSS uses to show/hide the menu
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (recommended for mobile UX)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error("Error: Could not find 'hamburger-button' or 'nav-links' element IDs in the HTML.");
    }
    
    // ... (The rest of your smooth scroll and form logic follows here) ...
    
    // =========================================================
    // 2. SMOOTH SCROLL BEHAVIOR FOR NAV LINKS
    // =========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================================
    // 3. ASYNC FORM SUBMISSION HANDLING
    // =========================================================
    // Get references to the form and the status message element
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); 
            statusMessage.textContent = 'Sending...'; 
            statusMessage.style.color = '#007acc';

            try {
                const response = await fetch(form.action, {
                    method: form.method, 
                    body: new FormData(form), 
                    headers: {
                        'Accept': 'application/json' 
                    }
                });

                if (response.ok) {
                    statusMessage.textContent = 'Message sent successfully! 🎉';
                    statusMessage.style.color = 'green';
                    form.reset(); 
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        statusMessage.textContent = 'Error: ' + data.errors.map(err => err.message).join(', ');
                    } else {
                        statusMessage.textContent = 'Oops! There was an issue submitting the form.';
                    }
                    statusMessage.style.color = 'red';
                }

            } catch (error) {
                console.error('Submission error:', error);
                statusMessage.textContent = 'Network error. Please try again later.';
                statusMessage.style.color = 'red';
            }
        });
    }
});