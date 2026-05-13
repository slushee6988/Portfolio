const faders = document.querySelectorAll('.fade-element');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) {

  entries.forEach((entry, index) => {

    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);

    } else {

      entry.target.classList.remove('visible');

    }

  });

}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.addEventListener("DOMContentLoaded", function () {
  const emailBtn = document.getElementById("emailBtn");

  emailBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = "klaytonslusher07@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard: " + email);
      window.location.href = "mailto:" + email;
    });
  });
});