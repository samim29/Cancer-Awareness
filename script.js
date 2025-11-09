// ===== Contact Form (No backend) =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("form-message");

  if (name && email && message) {
    formMessage.textContent = "Thank you for reaching out! We'll get back soon 💌";
    this.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});

// ===== Random Quote Fetching =====
async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quote").textContent = `"${data.content}"`;
    document.getElementById("author").textContent = `— ${data.author}`;
  } catch (error) {
    document.getElementById("quote").textContent = "Failed to load quotes.";
  }
}

// Fetch new quote every 10 seconds
fetchQuote();
setInterval(fetchQuote, 10000);
