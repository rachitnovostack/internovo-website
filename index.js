// Fade Library
AOS.init();



document.addEventListener("DOMContentLoaded", function () {
  const navToggleBar = document.querySelector(".nav-toggle-bar");
  const navToggleX = document.querySelector(".nav-toggle-x");
  const navLinks = document.querySelector(".nav-link-box ul");

  const toggleNav = () => {
    navLinks.classList.toggle("active");
    navToggleX.classList.toggle("on");
    navToggleBar.classList.toggle("on");
  };

  navToggleBar.addEventListener("click", toggleNav);
  navToggleX.addEventListener("click", toggleNav);

  // Add event listener to each navigation link
  const navLinksArray = document.querySelectorAll(".nav-link-box ul a");
  navLinksArray.forEach((link) => {
    link.addEventListener("click", () => {
      // Close the navbar when a link is clicked
      navLinks.classList.remove("active");
      navToggleX.classList.remove("on");
      navToggleBar.classList.remove("on");
    });
  });
});




$(document).ready(function() {
var $scrollToTopBtn = $('#scrollToTopBtn');

// Show or hide the button based on the scroll position
$(window).scroll(function() {
  if ($(this).scrollTop() > 20) {
    $scrollToTopBtn.fadeIn();
  } else {
    $scrollToTopBtn.fadeOut();
  }
});

// Smooth scroll to top when the button is clicked
$scrollToTopBtn.click(function() {
  $('html, body').animate({ scrollTop: 0 }, 2000); // Adjust the speed (in milliseconds) as needed
});
});


// Navbar scroll
  $(document).ready(function() {
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 2500, function(){
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              });
          }
      });
  });
