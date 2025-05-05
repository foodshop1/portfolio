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

// options toolbar thingy
setTimeout(() => {
  document.getElementById('options').classList.toggle('final');
}, 3800);
