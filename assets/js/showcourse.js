const [html] = document.getElementsByTagName("html")
const lang = html.getAttribute("lang");

  function myFunction(id) {

    var btnText = document.getElementById(id);
    var moreText;
    var hideRest;

    // course page
    if(id == "showBtnMII-748"){
        hideSpans();
        moreText = document.getElementById("span-mii-748");

    } else if( id == "showBtnMII-771"){
        hideSpans();
        moreText = document.getElementById("span-mii-771");

    } else if( id == "showBtnMII-774"){
        hideSpans();
        moreText = document.getElementById("span-mii-774");

    } else if ( id == "showBtnMII-779"){
        hideSpans();
        moreText = document.getElementById("span-mii-779");

    } else if (id == "showBtnDII-711"){
        hideSpans();
        moreText = document.getElementById("span-dii-711");
    } else if (id == "showBtnICI-4242"){
        hideSpans();
        moreText = document.getElementById("span-ici-4242");

    } else if (id == "showBtnINF-3144"){
        hideSpans();
        moreText = document.getElementById("span-inf-3144"); 
    }



    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      
    }

  }

  function hideSpans() {
    let spanArray = [];
    spanArray = document.getElementsByClassName('span-course');
    if (spanArray.length > 0){
      for (let i = 0; i < spanArray.length; i++) {
        spanArray[i].style.display='none';
      }
    }
    
  }
