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
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
});
