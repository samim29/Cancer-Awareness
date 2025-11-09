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
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  // Local fallback quotes
  const localQuotes = [
    { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { content: "Keep your face to the sunshine and you cannot see a shadow.", author: "Helen Keller" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" },
    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
  ];

  function render(q) {
    quoteEl.textContent = `"${q.content}"`;
    authorEl.textContent = q.author ? `— ${q.author}` : "— Unknown";
  }

  // start fresh for this fetch attempt

  try {
    const res = await fetch("https://api.kanye.rest/");
    if (!res.ok) throw new Error(`Primary API error: ${res.status}`);
    const data = await res.json();
    render({ content: data.quote, author: "Kanye West" });
    return;
  } catch (errPrimary) {


      const pick = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      render(pick);
      // Only log the fallback to console; no on-page banner
      console.warn("Quote APIs failed, using local fallback.", errPrimary, errSecondary);
    }
  }


// Fetch new quote every 10 seconds
fetchQuote();
setInterval(fetchQuote, 10000);
