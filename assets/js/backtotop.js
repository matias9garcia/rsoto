//Get the button
var mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    
    //trigers animation
    mybutton.style.animation = "fade-in 2s forwards";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;

    // element which needs to be scrolled to
  var element = document.querySelector("#rsoto-brand");

  // scroll to element
  element.scrollIntoView();

  document.documentElement.scrollTop = 0;
}