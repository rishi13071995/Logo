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
    <p>We provide online expense tracking application.</p>
    <p>Check below for more details:</p>
      <ul>
        <li><strong>Kharchalu</strong> - Expense Tracker Mobile App</li>
        <img class="kharchalu_mobile" src="./images/kharchalu_mobile.png">
        <p class="kharchalu_paragraph">In today's digital age, managing your daily data usage is essential to avoid unexpected charges or running out of data before the end of the month. However, if you're concerned about your data privacy or don't want to rely on online tools, there are ways to manage your data usage offline and for free.</p>
        <p class="kharchalu_paragraph">One option is to use a spreadsheet to track your daily data usage and calculate your total usage for the month. Another option is to use kharchalu app available for Android, which allows you to set alerts when you reach a certain threshold. You can also use your phone's built-in data tracking features or monitor your usage manually.</p>
        <p class="kharchalu_paragraph">By taking control of your data usage offline and for free, you can avoid unwanted charges and maintain your privacy with confidence.</p>
      </ul>
    `
  },
  bill: {
    title: "Billing & Payments",
    content: `
      <p class="kharchalu_paragraph">
      Our Billing & Payment Application is a powerful, user-friendly solution designed to streamline your financial operations. Whether you're a small business, freelancer, or enterprise, our platform makes it easy to generate invoices, accept payments, track expenses, and manage transactions - all in one place.
      </p>
      <p>Check below for more details:</p>
      <ul>
        <li><strong>Smart Billing</strong>
        - Customize invoice templates with your branding.
        </li>
        <br>
        <li><strong>Seamless Payments</strong>
        - Accept payments via credit/debit cards, UPI, net banking & wallets.
        </li>
        <br>
        <li><strong>Customer Management</strong>
        - Track customer payment history, Send reminders and payment follow-ups.
        </li>
        <br>
        <li><strong>Security & Compliance</strong>
        - GST-compliant invoicing (for India), Audit-ready reports.
        </li>
      <ul>
      <p class="note-text"><strong>Note</strong>:- Application work in progress release soon. </p>

    `
  },
  market: {
    title: "Digital Marketing & SEO",
    content: `
      <p class="kharchalu_paragraph">Take your business to the next level with our expert digital marketing and SEO services. We help brands grow online, reach their target audience, and convert clicks into customers.</p>
      <p>Check below for more details:</p>
      <ul>
        <li><strong>On-Page SEO</strong>
        - Meta tags, keyword optimization, content structure.
        </li>
        <br>
        <li><strong>Off-Page SEO</strong>
        - Link building, guest posting, citations.
        </li>
        <br>
        <li><strong>Technical SEO</strong>
        - Site speed, mobile-friendliness, schema markup.
        </li>
        <br>
        <li><strong>Local SEO</strong>
        - Google Business Profile optimization.
        </li>
        <br>
        <li><strong>SEO audits & competitor analysis</strong></li><br>
        <li><strong>Social Media Marketing (SMM)</strong>
        - Content creation & scheduling, Ad campaigns & audience targeting.
        </li>
        <br>
        <li><strong>Content Marketing</strong>
        - Blog writing & publishing, Website copywriting, Video content & scripts.
        </li>
        <br>
        <li><strong>Website Optimization</strong>
        - Mobile responsiveness, Speed optimization, User experience (UX) enhancements, Landing page design for conversions
        </li>
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

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

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
function openModalServices(key, type) {
  if (type === 'nav') {
    this.hideMainMenu()
  }
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
