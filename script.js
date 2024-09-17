// Анимация заголовка при загрузке страницы
gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" });
gsap.fromTo(".hero-subtitle", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 });

// Анимация изображений при прокрутке
gsap.utils.toArray(".image-item img").forEach((image) => {
  gsap.fromTo(image, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, 
      scale: 1, 
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });
});

// Анимация секции с призывом к действию
gsap.fromTo(".cta-title", { opacity: 0, y: 50 }, { 
  opacity: 1, 
  y: 0, 
  scrollTrigger: {
    trigger: ".call-to-action",
    start: "top 80%",
    scrub: true
  }
});

gsap.fromTo(".cta-description", { opacity: 0, y: 50 }, { 
  opacity: 1, 
  y: 0, 
  scrollTrigger: {
    trigger: ".call-to-action",
    start: "top 80%",
    scrub: true,
    delay: 0.5
  }
});
