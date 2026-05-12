document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const ul = nav?.querySelector('ul');

  if (nav && ul) {
    nav.addEventListener('click', () => {
      ul.classList.toggle('active');
    });
  }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const productCards = document.querySelectorAll('.product-card');
  const lines = document.querySelectorAll('.line');

  if (!productCards.length || !lines.length) return;

  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const index = card.getAttribute('data-index');

      lines.forEach(line => {
        line.style.backgroundColor = '#B08D57';
      });

      if (lines[index]) {
        lines[index].style.backgroundColor = '#3a2a1f';
      }
    });

    card.addEventListener('mouseleave', () => {
      lines.forEach(line => {
        line.style.backgroundColor = '#B08D57';
      });
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const toggleIcons = document.querySelectorAll('.toggle-icon');

  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      icon.innerText = icon.innerText === '+' ? '−' : '+';
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const pairingCards = document.querySelectorAll(".pairing-card");

  pairingCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 10px 25px rgba(176, 141, 87, 0.25)";
      card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
      card.style.transform = "translateY(0)";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const shopNowBtn = document.getElementById('shopNowBtn');
  const productsSection = document.getElementById('products');

  if (shopNowBtn && productsSection) {
    shopNowBtn.addEventListener('click', function () {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("buyModal");
  const closeModal = document.getElementById("closeModal");
  const buyButtons = document.querySelectorAll(".buy-btn");

  const productName = document.getElementById("modalProductName");
  const productPrice = document.getElementById("modalProductPrice");

  const paymentSelect = document.getElementById("paymentMethod");
  const cardFields = document.getElementById("cardFields");

  if (!modal) return;

  buyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");

      const name = card.querySelector("h3").innerText;
      const price = card.querySelector(".price").innerText;

      productName.innerText = name;
      productPrice.innerText = price;

      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("active"), 10);
    });
  });

  function close() {
    modal.classList.remove("active");
    setTimeout(() => modal.style.display = "none", 200);
  }

  closeModal.addEventListener("click", close);

  window.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "card") {
      cardFields.style.display = "flex";
    } else {
      cardFields.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

document.getElementById("shopBtn").addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});


document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("subModal");
  const closeModal = document.getElementById("closeSubModal");

  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextStep = document.getElementById("nextStep");

  const cards = document.querySelectorAll(".sub-card");
  const button = document.querySelector(".sub-btn");

  const planName = document.getElementById("selectedPlanName");
  const planPrice = document.getElementById("selectedPlanPrice");

  let selectedPlan = null;

  const plans = {
    light: { name: "Light Roast", price: "$18 / month" },
    signature: { name: "Signature Blend", price: "$25 / month" },
    dark: { name: "Dark Roast", price: "$22 / month" }
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      selectedPlan = card.getAttribute("data-plan");

      button.textContent = "Continue with " + plans[selectedPlan].name;
    });
  });

  button.addEventListener("click", () => {
    if (!selectedPlan) return;

    planName.textContent = plans[selectedPlan].name;
    planPrice.textContent = plans[selectedPlan].price;

    modal.style.display = "flex";
    step1.style.display = "block";
    step2.style.display = "none";
  });

  nextStep.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "block";
  });

  function close() {
    modal.style.display = "none";
  }

  closeModal.addEventListener("click", close);

  window.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

});
