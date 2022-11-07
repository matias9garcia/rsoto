const [html] = document.getElementsByTagName("html")
const lang = html.getAttribute("lang");

  function myFunction(id) {

    var btnText = document.getElementById(id);
    var moreText;
    var hideRest;

    // course page
    if(id == "showBtnMII-748"){
        moreText = document.getElementById("span-mii-748");

        // hide other courses REWORK
        hideRest = document.getElementById("span-mii-771");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-774");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-779");
        hideRest.style.display = "none";

    } else if( id == "showBtnMII-771"){
        moreText = document.getElementById("span-mii-771");

        // hide other courses REWORK
        hideRest = document.getElementById("span-mii-748");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-774");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-779");
        hideRest.style.display = "none";

    } else if( id == "showBtnMII-774"){
        moreText = document.getElementById("span-mii-774");

        // hide other courses REWORK
        hideRest = document.getElementById("span-mii-748");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-771");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-779");
        hideRest.style.display = "none";

    } else if ( id == "showBtnMII-779"){
        moreText = document.getElementById("span-mii-779");

        // hide other courses REWORK
        hideRest = document.getElementById("span-mii-748");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-771");
        hideRest.style.display = "none";

        hideRest = document.getElementById("span-mii-774");
        hideRest.style.display = "none";
    } else if (id == "showBtnDII-711"){
        moreText = document.getElementById("span-dii-711");
    } else if (id == "showBtnICI-4242"){
        moreText = document.getElementById("span-ici-4242");

        // hide other courses REWORK
        hideRest = document.getElementById("span-inf-3144");
        hideRest.style.display = "none";
    } else if (id == "showBtnINF-3144"){
        moreText = document.getElementById("span-inf-3144");

        // hide other courses REWORK
        hideRest = document.getElementById("span-ici-4242");
        // hideRest.style.display = "none";
    }



    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      
    }
  }
