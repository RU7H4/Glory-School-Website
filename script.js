// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Page
document.getElementById('contactForm').addEventListener('submit', function(e) {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '') {
        valid = false;
        alert('Please enter your name.');
    }

    if (email.value.trim() === '') {
        valid = false;
        alert('Please enter your email.');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    if (message.value.trim() === '') {
        valid = false;
        alert('Please enter your message.');
    }

    if (!valid) {
        e.preventDefault();
    }
});
