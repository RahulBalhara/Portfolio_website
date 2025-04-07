/* ========= Typing Animation ========= */
var typed = new Typed(".typing", {
    strings: [
        "a Front-End Developer.",
        "a UI/UX Enthusiast.",
        "learning React.js.",
        "a Creative Thinker.",
        "building cool websites."
      ],
      
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
 
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav li a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

