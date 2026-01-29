/* ===== REVIEWS (FINAL FIX) ===== */

const reviews = [
  "Excellent service – Ramesh, Chennai",
  "Fast loan approval – Kavitha, Coimbatore",
  "Very professional – Suresh, Madurai",
  "Clear guidance – Lakshmi, Salem",
  "Trustworthy DSA – Murugan, Trichy",
  "Helpful team – Anjali, Bangalore",
  "Smooth processing – Rohit, Mumbai",
  "Quick follow-up – Neha, Pune",
  "Transparent service – Amit, Delhi",
  "Professional handling – Harish, Kochi"
];

const reviewBox = document.getElementById("reviewBox");

if (reviewBox) {
  let lastIndex = -1;

  setInterval(() => {
    let index;
    do {
      index = Math.floor(Math.random() * reviews.length);
    } while (index === lastIndex);

    lastIndex = index;

    // Force visual refresh
    reviewBox.style.opacity = 0;

    setTimeout(() => {
      reviewBox.textContent = reviews[index];
      reviewBox.style.opacity = 1;
    }, 300);
  }, 2500);
}
function updateInterest() {
  const loanType = document.getElementById("loanType").value;
  const interestRate = document.getElementById("interestRate");

  const rates = {
    personal: 11.99,
    business: 12.5,
    home: 8.75,
    vehicle: 9.25
  };

  interestRate.value = rates[loanType] || "";
}

function calculateEMI() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const R = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  const N = parseFloat(document.getElementById("tenure").value) * 12;

  if (!P || !R || !N) {
    alert("Please enter all EMI details");
    return;
  }

  const emi =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  document.getElementById("emiResult").innerText =
    "Estimated EMI: ₹ " + emi.toFixed(0) + " / month";
}



const loanImages = [
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=900",
  "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6791?w=900",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
  "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=900"
];

let imgIndex = 0;
const img = document.getElementById("loanImage");

if (img) {
  img.src = loanImages[0];

  setInterval(() => {
    imgIndex = (imgIndex + 1) % loanImages.length;
    img.src = loanImages[imgIndex];
  }, 3000);
}
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const loan = document.getElementById("loan").value;

  const msg =
    `Hello Tech Consultants,%0A` +
    `Name: ${name}%0A` +
    `Mobile: ${phone}%0A` +
    `City: ${city}%0A` +
    `Loan Type: ${loan}`;

  window.open(`https://wa.me/917397270023?text=${msg}`, "_blank");
}
function calculateEMI() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const R = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
  const N = parseFloat(document.getElementById("loanTenure").value) * 12;

  if (!P || !R || !N) {
    document.getElementById("emiResult").innerText =
      "Please enter all values correctly";
    return;
  }

  const EMI =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

  document.getElementById("emiResult").innerText =
    "Monthly EMI: ₹ " + EMI.toFixed(2);
}
