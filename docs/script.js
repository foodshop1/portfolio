/*
'template for button listener'

// waits until the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // get the button's element
  const button = document.getElementById('tester');

  // event listener
  button.addEventListener('click', function () {
    //add action here
  });
});
*/

// home page button
document.addEventListener('DOMContentLoaded', function () {
  // get the button's element
  const button = document.getElementById('home-button');

  // event listener
  button.addEventListener('click', function () {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });
});

// about button
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('about-button');

  button.addEventListener('click', function () {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  });
});

//project button
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('projects-button');

  button.addEventListener('click', function () {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
  });
});

//contact me section
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('contact-button');

  button.addEventListener('click', function () {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// options toolbar thingy final state
setTimeout(() => {
  document.getElementById('options').classList.toggle('final');
}, 3800);

// remove scroll down indicator animation when scroll detected
document.addEventListener('DOMContentLoaded', () => {
  const scrollElement = document.getElementById('scroll');
  let isFading = false; // prevent multiple triggers

  window.addEventListener('scroll', () => {
    if (!isFading && scrollElement) {
      isFading = true;
      scrollElement.classList.add('fade-out');

      // Remove after fade animation ends
      scrollElement.addEventListener('animationend', () => {
        scrollElement.remove();
      });
    }
  });
});

//MOBILE HANDLING
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('hidden');
}

function handleMobileView() {
  const isMobile = window.innerWidth <= 768;

  const header = document.querySelector('.header');
  const mobileNav = document.querySelector('.mobile-nav');

  if (isMobile && header) {
    header.remove(); // remove from DOM
    mobileNav.classList.remove('hidden');
  }
}

// Run on page load
window.addEventListener('DOMContentLoaded', handleMobileView);
// Optional: run again if window is resized
window.addEventListener('resize', handleMobileView);
