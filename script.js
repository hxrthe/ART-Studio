// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Section Load Animation
// This runs immediately when the page loads, giving a smooth entrance
gsap.from(".hero-content h1", {
    y: 50, // Starts 50 pixels down
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
// Fades in and slides up section headers as you scroll down to them
gsap.utils.toArray("section h2").forEach(heading => {
    gsap.from(heading, {
        scrollTrigger: {
            trigger: heading,
            start: "top 85%", // Animation starts when the top of the heading hits 85% down the screen
            toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// 3. Staggered Card Animations (Services & Projects)
// This makes the cards pop in one after another (staggered) rather than all at once
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // 0.2 second delay between each card animating
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