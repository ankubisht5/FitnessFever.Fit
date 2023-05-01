// function to hide the navigation bar on scroll
function hideNavBarOnScroll() {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
      } else {
        document.querySelector("header").style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    }
  }
  
  // function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();
    let firstName = document.getElementById("fname-input").value;
    let lastName = document.getElementById("lname-input").value;
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    // do something with the form data
  }
  
  // add event listeners
  document.addEventListener("DOMContentLoaded", hideNavBarOnScroll);
  document.getElementById("signup-form").addEventListener("submit", handleFormSubmission);
  