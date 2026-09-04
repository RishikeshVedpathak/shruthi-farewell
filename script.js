const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const progress = document.querySelector(".progress span");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${Math.min(100, Math.max(0, window.scrollY / max * 100))}%`;
}, { passive: true });

// Gentle image reveal/parallax — intentionally subtle.
const images = document.querySelectorAll(".moment img, .photo-wrap img, .final-photo img");
window.addEventListener("scroll", () => {
  images.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < innerHeight) {
      const shift = (innerHeight / 2 - (rect.top + rect.height / 2)) * -0.025;
      img.style.transform = `scale(1.025) translateY(${shift}px)`;
    }
  });
}, { passive: true });
