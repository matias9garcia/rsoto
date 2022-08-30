const [html] = document.getElementsByTagName("html")
const lang = html.getAttribute("lang");

function myFunction() {
    
    var moreText = document.getElementById("more-proyectos");
    var btnText = document.getElementById("showBtnProy");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      if(lang == "es"){
        btnText.innerHTML = "Mostrar menos"; 
      }else if(lang == "en"){
        btnText.innerHTML = "Read less"; 
      }
      
    } else {
        if(lang == "es"){
            btnText.innerHTML = "Mostrar más"; 
        }else if(lang == "en"){
            btnText.innerHTML = "Read more"; 
        }
      moreText.style.display = "none";
    }
  }

  function myFunction2() {
    
    var moreText = document.getElementById("more-revistas");
    var btnText = document.getElementById("showBtnMagazine");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      if(lang == "es"){
        btnText.innerHTML = "Mostrar menos"; 
      }else if(lang == "en"){
        btnText.innerHTML = "Read less"; 
      }
      
    } else {
        if(lang == "es"){
            btnText.innerHTML = "Mostrar más"; 
        }else if(lang == "en"){
            btnText.innerHTML = "Read more"; 
        }
      moreText.style.display = "none";
    }
  }

  function myFunction3() {
    
    var moreText = document.getElementById("more-comite");
    var btnText = document.getElementById("showBtnComite");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      if(lang == "es"){
        btnText.innerHTML = "Mostrar menos"; 
      }else if(lang == "en"){
        btnText.innerHTML = "Read less"; 
      }
      
    } else {
        if(lang == "es"){
            btnText.innerHTML = "Mostrar más"; 
        }else if(lang == "en"){
            btnText.innerHTML = "Read more"; 
        }
      moreText.style.display = "none";
    }
  }