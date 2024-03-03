let header = document.querySelector(".header");
let footer = document.querySelector(".footer")

fetch("components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
  });
fetch("components/footer.html")
  .then((res) => res.text())
  .then((FooterData) => {
    footer.innerHTML = FooterData;
  });


  function myFunction(e) {
    document.getElementById("main").style.filter = "blur(0.6rem)";
  }
  
  function clearColor() {
    document.getElementById("main").style.filter = "none";
  }
