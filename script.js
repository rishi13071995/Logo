const modalData = {
  accounting: {
    title: "Accounting",
    content: `
      <p>We provide different types of accounting services.</p>
      <p>Check below for more details:</p>
      <ul>
        <li>
          <strong>Income Tax Returns</strong><br>
          <ul>
            <li>
              <strong>ITR-1
              </strong>
              - It's for salary employees.
            </li>
            <br>
            <li>
              <strong>ITR-2
              </strong>
              - It's for salary employees with gains.
            </li>
            <br>
            <li>
              <strong>ITR-3
              </strong>
              - It's for business persons who doe's not meet audit.
            </li>
            <br>
            <li>
              <strong>ITR-4
              </strong>
              - It's for business persons who have audit file.
            </li>
          </ul>
        </li>
        <br>
        <li>
          <strong>Good & Service Tax</strong> <br>
          <ul>
            <li>
            <strong>GSTR-1</strong>
            - Filed by regular taxpayers to report details of their outward supplies (sales).
            <br>
            </li>
            <li>
            <strong>GSTR-3B</strong>
            - A monthly self-declaration form for regular taxpayers to provide a summary of outward supplies, input tax credit (ITC) claims, and tax payments.
            </li>
            <br>
            <li>
            <strong>GSTR-4</strong>
            - An annual return for taxpayers who have opted for the Composition Scheme. These are typically small businesses with an annual turnover up to ₹1.5 crore.
            </li>
            <br>
            <li>
            <strong>GSTR-9</strong>
            - The annual return for regular taxpayers, consolidating all monthly or quarterly returns filed during the financial year.
            </li>
          </ul>
        </li>
        <br>
        <li><strong>Audit</strong> - verification of financial statements</li>
      </ul>
    `
  },
  legal: {
    title: "Legal",
    content: `
      <p>We provide different types of legal services.</p>
      <p>Check below for more details:</p>
      <ul>
        <li>
          <strong>Constitutional Law</strong>
          - Deals with the interpretation and application of the Constitution of India, guaranteeing fundamental rights and personal liberty.
        </li>
        <br>
        <li><strong>Criminal Law</strong>
        - Addresses offenses against individuals and society, with specific laws governing issues like offenses against women and children, as well as corruption and terrorism. 
        </li>
        <br>
        <li><strong>Civil Law</strong>
        - Focuses on disputes between individuals or entities, covering various matters like commercial issues, property, and contract disputes. 
        </li>
        <br>
        <li><strong>Family/Personal Law</strong>
        - Manages matters related to family, including marriage, divorce, and inheritance, which can be complex due to religious and customary laws. 
        </li>
        <br>
        <li><strong>Corporate Law</strong>
        - Governs companies, their formation, operations, and compliance with regulations. 
        </li>
      </ul>
    `
  },
  invoice: {
    title: "Invoicing",
    content: `
    <p>We provide digital or manual invoice services.</p>
    <p>Check below for more details:</p>
      <ul>
        <li><strong>Manual Service</strong>
        - We provide support of manual invoice generation.
        </li>
        <br>
        <li><strong>Digital Service</strong>
        - We provide digital app for automatic inovice generation. Based on requirements we designed digital invoicing.
        </li>
      </ul>
    `
  },
  expense: {
    title: "Expenses",
    content: `
    <p>We provide.</p>
    <p>Check below for more details:</p>
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
  this.hideMainMenu()
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
  this.hideMainMenu()
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

function toggleMenu() {
  this.closeModal()
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

function hideSubMenu(element = null) {
  this.closeModal()
  if (element !== null) {
    const nav = document.getElementById(element);
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  } else {
    const featureNav = document.getElementById('featuresNavs');
    const serviceNav = document.getElementById('servicesNavs');
    if (featureNav.style.display === 'block') {
      featureNav.style.display = 'none';
    } else {
      featureNav.style.display = 'block';
    }
    if (serviceNav.style.display === 'block') {
      serviceNav.style.display = 'none';
    } else {
      serviceNav.style.display = 'block';
    }
  } 
}

function hideMainMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

// Optional: Toggle submenus on mobile
document.querySelectorAll('.has-subnav > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent link jump
      const parentLi = this.parentElement;
      parentLi.classList.toggle('open');
    }
  });
})
