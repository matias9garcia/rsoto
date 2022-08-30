const [html] = document.getElementsByTagName("html")
const lang = html.getAttribute("lang");

  function myFunction(id) {

    var btnText = document.getElementById(id);
    var moreText;

    if(id == "showBtnProy"){
      moreText = document.getElementById("more-proyectos");
    }else if(id == "showBtnMagazine"){
      moreText = document.getElementById("more-revistas");
    }else if(id == "showBtnComite"){
      moreText = document.getElementById("more-comite");
    }
  
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
