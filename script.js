function clickMenu() {
    var box = document.querySelector("nav");
    box.classList.toggle("nav");
    var menuIcon = document.querySelector(".menu-bar");

    // Check if the element is found
    if (menuIcon) {
        // Toggle the class "menu-bar-rotated" on the element
        menuIcon.classList.toggle("menu-bar-rotated");
        console.log("rotate working");
    } else {
        console.error("Element with class 'menu-bar' not found.");
    }

    
}



document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("preloader");

    if (loader) {
        window.addEventListener("load", function() {
            loader.style.display = "none";
            console.log("preloader working");
        });
    } else {
        console.error("Element with ID 'preloader' not found.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var fadeElements = document.querySelectorAll(".fade-in");
  
    function checkFade() {
      fadeElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("fade-in-visible");
        }
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  

    checkFade();


    window.addEventListener("scroll", checkFade);
  });


  function message(){
    var submit = document.getElementById("textarea").value;

    if (submit.length >=  2) {
    window.alert("Thank you for your message : )");
    console.log("success",submit);
    } 
    else {
    window.alert("Invalid or Your message is to short");
    console.log("failed",submit);
    }
}
