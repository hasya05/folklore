document.addEventListener("DOMContentLoaded", () => {
  // -------- EMAIL FORM HANDLING --------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx1ckjbcTegGOfmo8hpbEhMxIHR8EIwylrhnQMY7SEIKZVrnEhyL5z5cLFeLUVEMIVSOg/exec';
  const form = document.getElementById('emailForm');

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = form.querySelector("input[type='email']");
      const email = emailInput.value.trim();

      if (!email) {
        alert("Please enter a valid email.");
        return;
      }

      // Submit to Google Script
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        alert(`Subscribed with ${email}! 🌙`);
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert("Something went wrong. Please try again.");
      });
    });
  }

  // -------- FADE-IN ON SCROLL --------
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
