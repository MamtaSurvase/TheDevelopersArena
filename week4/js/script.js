/*function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function bookTable() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let people = document.getElementById("people").value;

  if (name === "" || email === "" || people === "") {
    alert("Please fill all details");
    return false;
  }

  alert("🎉 Table booked successfully!");
  return true;
}*/

/* =========================
   DARK / LIGHT MODE (SAVE MODE)
========================= */

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

/* Load saved theme */
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
  ".card, .menu-card, .gallery-img, .about-container"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

/* =========================
   BOOKING FORM VALIDATION
========================= */
function bookTable() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const people = document.getElementById("people").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !email || !phone || !people || !date || !time) {
    showMessage("❌ Please fill all required fields", "error");
    return false;
  }

  if (!email.includes("@")) {
    showMessage("❌ Invalid email address", "error");
    return false;
  }

  showMessage(`🎉 Booking Confirmed for ${name} at ${time}`, "success");
  return false;
}


/* =========================
   CUSTOM MESSAGE BOX
========================= */

function showMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.innerText = text;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}



function filterMenu(category) {
  const items = document.querySelectorAll(".menu-card");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}


function searchMenu() {
  const searchValue = document
    .getElementById("menuSearch")
    .value
    .toLowerCase();

  const items = document.querySelectorAll(".menu-card");

  items.forEach(item => {
    const dishName = item.querySelector("h3").innerText.toLowerCase();

    if (dishName.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function sortMenu(order) {
  const menuGrid = document.querySelector(".menu-grid");
  const items = Array.from(menuGrid.children);

  items.sort((a, b) => {
    const priceA = parseInt(a.querySelector("p").innerText.replace("₹", ""));
    const priceB = parseInt(b.querySelector("p").innerText.replace("₹", ""));

    return order === "low" ? priceA - priceB : priceB - priceA;
  });

  items.forEach(item => menuGrid.appendChild(item));
}

document.querySelectorAll(".rating").forEach(star => {
  const rating = star.getAttribute("data-rating");
  star.style.setProperty("--rating", rating);
});
