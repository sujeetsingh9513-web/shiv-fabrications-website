
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// WhatsApp Enquiry Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const work = document.getElementById("workType").value;
    const message = document.getElementById("message").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10 digit mobile number.");
        return;
    }

    // Replace with your shop's WhatsApp number
    const shopNumber = "91XXXXXXXXXX";

    const text = `New Customer Enquiry
Name: ${name}
Customer Mobile: ${phone}
Work: ${work}
Message: ${message}`;

    const url = "https://wa.me/" + shopNumber +
                "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
});
