const modalData = {
  accounting: {
    title: "What is Accounting?",
    content: `
      <p>Accounting is the process of recording, summarizing, and reporting financial transactions 
      of a business. It helps organizations track their income, expenses, assets, and liabilities.</p>
      <p>The core purposes of accounting include:</p>
      <ul>
        <li><strong>Financial Accounting</strong> – external reporting</li>
        <li><strong>Managerial Accounting</strong> – internal decision-making</li>
        <li><strong>Tax Accounting</strong> – compliance with tax laws</li>
        <li><strong>Auditing</strong> – verification of financial statements</li>
      </ul>
    `
  },
  legal: {
    title: "What is Tax?",
    content: `
      <p>Tax is a mandatory financial charge imposed by governments on individuals or businesses 
      to fund public services and infrastructure.</p>
      <p>Common types of taxes include:</p>
      <ul>
        <li>Income Tax</li>
        <li>Sales Tax</li>
        <li>Corporate Tax</li>
        <li>Property Tax</li>
      </ul>
    `
  },
  invoice: {
    title: "What is Invoice?",
    content: `
      <p>Tax is a mandatory financial charge imposed by governments on individuals or businesses 
      to fund public services and infrastructure.</p>
      <p>Common types of taxes include:</p>
      <ul>
        <li>Income Tax</li>
        <li>Sales Tax</li>
        <li>Corporate Tax</li>
        <li>Property Tax</li>
      </ul>
    `
  },
  expense: {
    title: "What is Expense?",
    content: `
      <p>Tax is a mandatory financial charge imposed by governments on individuals or businesses 
      to fund public services and infrastructure.</p>
      <p>Common types of taxes include:</p>
      <ul>
        <li>Income Tax</li>
        <li>Sales Tax</li>
        <li>Corporate Tax</li>
        <li>Property Tax</li>
      </ul>
    `
  },
  bill: {
    title: "What is Bill?",
    content: `
      <p>Tax is a mandatory financial charge imposed by governments on individuals or businesses 
      to fund public services and infrastructure.</p>
      <p>Common types of taxes include:</p>
      <ul>
        <li>Income Tax</li>
        <li>Sales Tax</li>
        <li>Corporate Tax</li>
        <li>Property Tax</li>
      </ul>
    `
  },
  market: {
    title: "What is Bill?",
    content: `
      <p>Tax is a mandatory financial charge imposed by governments on individuals or businesses 
      to fund public services and infrastructure.</p>
      <p>Common types of taxes include:</p>
      <ul>
        <li>Income Tax</li>
        <li>Sales Tax</li>
        <li>Corporate Tax</li>
        <li>Property Tax</li>
      </ul>
    `
  }
};

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const open = answer.style.maxHeight;

      // Close all
      document.querySelectorAll(".faq-answer").forEach((a) => {
        a.style.maxHeight = null;
      });

      // Toggle current
      if (!open || open === "0px") {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});


function openModal() {
  document.getElementById('formModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('formModal').style.display = 'none';
  document.getElementById('formModalServices').style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById('formModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function openModalServices(key) {
  const data = modalData[key];
  if (!data) {
    console.error(`No modal content found for key: ${key}`);
    return;
  }

  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <h2>${data.title}</h2>
    ${data.content}
  `;

  document.getElementById('formModalServices').style.display = 'block';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById('formModalServices');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
