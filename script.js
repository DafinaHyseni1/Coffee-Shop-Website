  
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    nav.addEventListener('click', () => {
        const ul = nav.querySelector('ul');
        ul.classList.toggle('active');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); 

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth", 
            block: "start"     
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    const lines = document.querySelectorAll('.line');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const index = card.getAttribute('data-index');
            lines.forEach(line => line.style.backgroundColor = '#f4a261');
            
            lines[index].style.backgroundColor = ' #311f0f'; 
        });

        card.addEventListener('mouseleave', () => {
            lines.forEach(line => line.style.backgroundColor = '#f4a261');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('open');
        });
    });

    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            if (icon.innerText === '+') {
                icon.innerText = '−'; 
            } else {
                icon.innerText = '+'; 
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const pairingCards = document.querySelectorAll(".pairing-card");

    pairingCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 4px 10px rgba(255, 165, 0, 0.6)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
        });
    });
});

const shopNowBtn = document.getElementById('shopNowBtn');
const productsSection = document.getElementById('products');

shopNowBtn.addEventListener('click', function() {
  productsSection.scrollIntoView({ behavior: 'smooth' });
});
document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const name = card.querySelector('h3').textContent;
      const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
  
      // Krijo modalin
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div style="
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.7); display: flex; justify-content: center;
          align-items: center; z-index: 1000;
        " id="customModal">
          <div style="
            background: #fff; padding: 25px; border-radius: 10px;
            width: 350px; position: relative; text-align: left;
            font-family: Arial, sans-serif;
          ">
            <span id="closeModal" style="position:absolute;top:10px;right:15px;cursor:pointer;font-size:18px;">&times;</span>
            <h2 style="margin-bottom: 10px;">${name}</h2>
            <p style="margin: 5px 0;">Unit Price: <strong>$${price.toFixed(2)}</strong></p>
            
            <label for="qtyInput">Quantity:</label>
            <input type="number" id="qtyInput" value="1" min="1" style="width: 60px; margin-left: 10px;"><br><br>
            
            <p>Total: <strong>$<span id="totalPrice">${price.toFixed(2)}</span></strong></p>
            
            <label for="paymentMethod">Payment Method:</label><br>
            <select id="paymentMethod" style="width: 100%; padding: 5px; margin-top: 5px;">
              <option value="" disabled selected>Select payment method</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select><br><br>
  
            <div id="cardDetails" style="display: none;">
              <label>Card Number:</label><br>
              <input type="text" placeholder="1234 5678 9012 3456" style="width: 100%; padding: 5px;"><br><br>
              <label>Expiry Date:</label><br>
              <input type="text" placeholder="MM/YY" style="width: 100%; padding: 5px;"><br><br>
              <label>CVV:</label><br>
              <input type="text" placeholder="123" style="width: 100%; padding: 5px;"><br><br>
            </div>
  
            <button id="proceedPayment" style="
              width: 100%; padding: 10px; background:  #f4a261;
              color: white; border: none; border-radius: 5px;
              font-weight: bold;
            ">Proceed to Payment</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
  
      const qtyInput = document.getElementById('qtyInput');
      const totalPrice = document.getElementById('totalPrice');
      const paymentMethod = document.getElementById('paymentMethod');
      const cardDetails = document.getElementById('cardDetails');
  
      qtyInput.addEventListener('input', () => {
        const qty = parseInt(qtyInput.value) || 1;
        totalPrice.textContent = (qty * price).toFixed(2);
      });
  
      paymentMethod.addEventListener('change', () => {
        if (paymentMethod.value === 'card') {
          cardDetails.style.display = 'block';
        } else {
          cardDetails.style.display = 'none';
        }
      });
  
      document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('customModal').remove();
      });
  
      document.getElementById('proceedPayment').addEventListener('click', () => {
        if (!paymentMethod.value) {
          alert("Please select a payment method.");
          return;
        }
  
        alert("Proceeding to payment gateway... (this is a demo, no real transaction will occur)");
        document.getElementById('customModal').remove();
      });
    });
  });
