// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Menu icon animation
  var menuIconAnimation = bodymovin.loadAnimation({
    container: document.getElementById('menu-icon-lottie'), // Menu icon container
    path: './assets/icons8-menu.json', // Path to the JSON file
    renderer: 'svg', // Preferred renderer
    loop: false, // Don't loop the animation
    autoplay: false, // Don't autoplay the animation
  });

  // Set the color of the animation to white
  const menuIconElement = document.getElementById('menu-icon-lottie');
  
  // Function to change SVG colors to white
  function changeIconColor() {
    // Wait for the SVG to be loaded
    setTimeout(() => {
      const svgElements = menuIconElement.querySelectorAll('svg path, svg rect, svg circle, svg ellipse, svg line, svg polyline, svg polygon');
      svgElements.forEach(path => {
        // Change stroke color to white
        if (path.getAttribute('stroke')) {
          path.setAttribute('stroke', '#FFFFFF');
        }
        // Change fill color to white if it's not transparent
        if (path.getAttribute('fill') && path.getAttribute('fill') !== 'none') {
          path.setAttribute('fill', '#FFFFFF');
        }
      });
    }, 100);
  }
  
  // Call the function initially
  changeIconColor();
  
  // Also call it when the animation completes to ensure color stays
  menuIconAnimation.addEventListener('complete', changeIconColor);

  // Set initial state to hamburger menu (frame 0)
  menuIconAnimation.goToAndStop(0, true);

  // Get references to navbar elements
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Add event listener for Bootstrap collapse events
  navbarCollapse.addEventListener('show.bs.collapse', function() {
    // Play animation forward (hamburger to back button)
    menuIconAnimation.playSegments([0, 13], true);
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function() {
    // Play animation backward (back button to hamburger)
    menuIconAnimation.playSegments([14, 27], true);
  });
});