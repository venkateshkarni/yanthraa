window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0.5 || document.documentElement.scrollTop > 0.5) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.height = "30px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.height = "50px";
  }
}