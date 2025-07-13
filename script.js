// Add interactivity later (e.g., login modal, cart functionality)
// Shrink navbar on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shrink", window.scrollY > 60);
});

// Login Modal
function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Add to Cart Counter
let cartCount = 0;
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      cartCount++;
      document.getElementById("cart-count").innerText = cartCount;
    });
  });
});
