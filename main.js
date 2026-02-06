const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, {
  threshold: 0.15,
});

reveals.forEach((item) => observer.observe(item));
