function sendToWhatsApp(brand) {
    const input = document.getElementById("partInput").value.trim();
  
    if (!input) {
      alert("Please type the part you're looking for.");
      return;
    }
  
    const phone = "+254710425756"; // 🔁 Replace with your WhatsApp number (no + or spaces)
    const message = `Hi! I'm looking for a ${brand} part: ${input}`;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMsg}`;
  
    window.open(url, "_blank");
  }
  