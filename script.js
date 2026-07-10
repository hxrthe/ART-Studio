// Wait for the entire HTML document to load before running animations
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Section Load Animation
    gsap.from(".hero-content h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
    });

    gsap.from(".hero-content .btn-primary", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
    });

    // 2. Section Titles Scroll Animation
    gsap.utils.toArray("section h2").forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 85%", 
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // 3. Staggered Card Animations (Services & Projects)
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

});