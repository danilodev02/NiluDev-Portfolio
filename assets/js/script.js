let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

const title = document.getElementById("skill-title");
const text = document.getElementById("skill-text");

const triggers = document.querySelectorAll(".trigger");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        title.innerHTML = entry.target.dataset.title;
        text.innerHTML = entry.target.dataset.text;
      }
    });
  },
  {
    threshold: 0.6
  }
);

triggers.forEach(el => observer.observe(el));
