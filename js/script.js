

let prevBtn = document.querySelectorAll("#prev");
let nextBtn = document.querySelectorAll("#next");
let card = document.getElementsByClassName("card")[0];
let CategoryCard = document.getElementsByClassName("category-card")[0];
prevBtn.forEach((fun) => {
  fun.addEventListener("click", () => {
    cardSection.scrollLeft -= 210;
    CategoryCardSection.scrollLeft -= 210;
  });
});
nextBtn.forEach((fun) => {
  fun.addEventListener("click", () => {
    cardSection.scrollLeft += 210;
    CategoryCardSection.scrollLeft += 210;
  });
});




function myFunction(e) {
  document.getElementById("main").style.filter = "blur(0.6rem)";
}

function clearColor() {
  document.getElementById("main").style.filter = "none";
}
let quantity = 1;
let quantityOp = document.getElementById("productQuantityOutput")
function removeProduct(){
  quantity --;
  if(quantity <=0){
    quantity++;
    document.getElementById("quantityMessage").style.display = "block";
    setTimeout(function() {
      document.getElementById("quantityMessage").style.display = "none";
    }, 2000);
  }
  quantityOp.innerHTML = quantity;
}
function addProduct(){
  quantity++;
quantityOp.innerHTML = quantity;
}

quantity1 = quantity;
console.log(quantity1)
function productImgClick(smallimg){
  var fullimg = document.getElementById("productimagebox");
  fullimg.src =smallimg.src;
}
let cartQuantityOutput = document.getElementById("cartQuantityOutput");
function removeProductCart(){
  quantity --;
  if(quantity <=0){
    quantity++;
    document.getElementById("quantityMessage").style.display = "block";
    setTimeout(function() {
      document.getElementById("quantityMessage").style.display = "none";
    }, 2000);
  }
  cartQuantityOutput.innerHTML = quantity;
}
function addProductCart(){
  quantity++;
  cartQuantityOutput.innerHTML = quantity;
}
quantity = quantity;

