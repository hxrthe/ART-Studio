document.addEventListener("DOMContentLoaded", (event) => {
    
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section Animations (Forced from 0 to 1)
    gsap.fromTo(".hero-content h1", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    gsap.fromTo(".hero-content p", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
    );

    gsap.fromTo(".hero-content .btn-primary", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
    );

    // 2. Section Titles Scroll Animation
    gsap.utils.toArray("section h2").forEach(heading => {
        gsap.fromTo(heading, 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%", 
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }
        );
    });

    // 3. Staggered Card Animations (Services & Projects)
    gsap.fromTo(".service-card", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".project-card", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".projects-container",
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }
    );
});