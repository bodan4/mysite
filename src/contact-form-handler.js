document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
  
    // Detectează mediu: local sau production
    const isLocalhost = window.location.hostname === "localhost";
    const apiUrl = isLocalhost
      ? "http://localhost:10000/send-email"
      : "https://email-lpji.onrender.com/send-email";
  
    form.action = apiUrl;
    console.log(`📤 Submitting form to: ${form.action}`);
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
  
      // Validare rapidă
      if (!data.name || !data.email || !data.message) {
        showToast("⚠️ Please fill in all fields.", false);
        return;
      }
  
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
  
        if (response.ok) {
          form.reset();
          showToast("✅ Your message has been sent successfully!", true);
        } else {
          showToast(result.error || "❌ Something went wrong!", false);
        }
  
      } catch (error) {
        console.error("❌ Fetch error:", error);
        showToast("❌ Could not connect to the server.", false);
      }
    });
  });
  
  
  // === Toast Notification (cu efecte animate) ===
  
  function showToast(message, success = true) {
    const toast = document.createElement('div');
    toast.textContent = message;
  
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      background: success ? '#64ffda' : '#ff4d4f',
      color: '#0a192f',
      fontWeight: 'bold',
      borderRadius: '8px',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.25)',
      zIndex: 9999,
      opacity: '0',
      transform: 'translateY(20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    });
  
    document.body.appendChild(toast);
  
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });
  
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
  