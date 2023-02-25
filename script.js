
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    navHeader.classList.toggle("open");
    if(navHeader.classList.contains("open")){
    	navHeader.style.maxHeight = navHeader.scrollHeight + "px";
    }
    else{
    	navHeader.removeAttribute("style");
    }
 } 

// HTML.addEventListener("mouseover", () =>{
//    HTMLDiv.classList.toggle("progbarhtml2")
// })

// HTML.addEventListener("mouseout", () =>{
//    HTMLDiv.classList.toggle("progbarhtml2")
// })

// CSSh1.addEventListener("mouseover", () =>{
//    CssDiv.classList.toggle("progbarcss2")
// })

// CSSh1.addEventListener("mouseout", () =>{
//    CssDiv.classList.toggle("progbarcss2")
// })

// JS.addEventListener("mouseover", () =>{
//    JsDiv.classList.toggle("progbarjs2")
// })

// JS.addEventListener("mouseout", () =>{
//    JsDiv.classList.toggle("progbarjs2")
// })


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}