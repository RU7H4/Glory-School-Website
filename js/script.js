document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE MENU FUNCTIONALITY =====
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Open mobile menu
    hamburger.addEventListener('click', function() {
        mobileSidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu function
    function closeSidebar() {
        mobileSidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close menu events
    closeBtn.addEventListener('click', closeSidebar);
    mobileOverlay.addEventListener('click', closeSidebar);
    
    // Close menu when clicking navigation links
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // ===== GALLERY CARD ANIMATIONS =====
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    galleryCards.forEach(card => {
        // 3D Parallax Tilt Effect
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width/2;
            const cardCenterY = cardRect.top + cardRect.height/2;
            const xAxis = (cardCenterX - e.clientX) / 20;
            const yAxis = (cardCenterY - e.clientY) / 20;
            
            this.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
        });
        
        // Smooth transition when mouse enters
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.1s ease';
        });
        
        // Reset position when mouse leaves
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        });
        
        // Click to enlarge (optional - can be removed if not needed)
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const caption = this.querySelector('h3').textContent;
            
            // Create lightbox elements dynamically
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${imgSrc}" alt="${caption}" class="lightbox-img">
                    <div class="lightbox-caption">${caption}</div>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
                lightbox.remove();
                document.body.style.overflow = '';
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }
            });
        });
    });

    // ===== WINDOW RESIZE HANDLER =====
    function handleResize() {
        // Close mobile menu if window is resized to desktop
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    }
    window.addEventListener('resize', handleResize);
    
    // Initialize
    handleResize();
});