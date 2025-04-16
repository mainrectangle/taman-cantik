const sections = document.querySelectorAll("ol li a");
const activeClass = "font-bold text-blue-600 -ml-px border-l-2 border-blue-500";

function setActiveLink() {
  const hash = window.location.hash;
  sections.forEach((link) => {
    const li = link.parentElement;
    if (link.getAttribute("href") === hash) {
      li.classList.add(...activeClass.split(" "));
    } else {
      li.classList.remove(...activeClass.split(" "));
    }
  });
}

window.addEventListener("hashchange", setActiveLink);
window.addEventListener("DOMContentLoaded", setActiveLink);
