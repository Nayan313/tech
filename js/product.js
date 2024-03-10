let newStarting = new URLSearchParams(window.location.search).get("id");
console.log(newStarting);

fetch("json/product.json")
  .then((SingleProductDetail) => SingleProductDetail.json())
  .then((ProductDetail) => {
    let thisProduct = ProductDetail.filter((value) => {
      return value.productId == newStarting;
    })[0];
    document.title = thisProduct.name;
    document.getElementById("SingleDirectoinName").innerHTML = thisProduct.name;
    document.getElementById("SingleProductPageCatagory").innerHTML =
      thisProduct.catagory;
    document.getElementById("SingleProductPageBrand").innerHTML =
      thisProduct.brand;
    document.getElementById("SingleProductPageName").innerHTML =
      thisProduct.name;
    document.querySelector(".inproductBrandOS").innerHTML =
      thisProduct.OperatingSystem;
    document.querySelector(".inproductname").innerHTML = thisProduct.name;
    document.querySelector(".inproductBrandbrand").innerHTML =
      thisProduct.brand;
    document.getElementById("SingleProductPagePrice").innerHTML =
      "₹" + thisProduct.price;

    document.getElementById("SingleProductMainImg").innerHTML = `
   <img src="${thisProduct.ProductImgMain}" id="productimagebox" alt="">`;

    document.querySelector(".description-section").innerHTML =
      thisProduct.description;

    document.getElementById("ProductImgMain").innerHTML = `
    <img src="${thisProduct.ProductImgMain}" alt="" class="small-img"
   onclick="productImgClick(this)"></div>`;
    document.getElementById("ProductImgSide").innerHTML = `
    <img src="${thisProduct.ProductImgSide}" alt="" class="small-img"
   onclick="productImgClick(this)"></div>`;
    document.getElementById("ProductImgMobbiles").innerHTML = `
    <img src="${thisProduct.ProductImgMobbiles}" alt="" class="small-img"
   onclick="productImgClick(this)"></div>`;
    document.getElementById("ProductImgSpecification").innerHTML = `
    <img src="${thisProduct.ProductImgSpecification}" alt="" class="small-img"
   onclick="productImgClick(this)"></div>`;
    document.getElementById("ProductImgBox").innerHTML = `
    <img src="${thisProduct.ProductImgBox}" alt="" class="small-img"
   onclick="productImgClick(this)"></div>`;

    document.getElementById("fullImg1").innerHTML = `<img src="${thisProduct.full1}" alt="" class="full-scale-img">`;
    document.getElementById("fullImg2").innerHTML = `<img src="${thisProduct.full2}" alt="" class="full-scale-img">`;
    document.getElementById("fullImg3").innerHTML = `<img src="${thisProduct.full3}" alt="" class="full-scale-img">`;

    console.log("₹" + thisProduct.full3);
    console.table(thisProduct);
  });

let quantity = 1;
let quantityOp = document.getElementById("productQuantityOutput");
function removeProduct() {
  quantity--;
  if (quantity <= 0) {
    quantity++;
    document.getElementById("quantityMessage").style.display = "block";
    setTimeout(function () {
      document.getElementById("quantityMessage").style.display = "none";
    }, 2000);
  }
  quantityOp.innerHTML = quantity;
}
function addProduct() {
  quantity++;
  quantityOp.innerHTML = quantity;
}

quantity1 = quantity;

function productImgClick(smallimg) {
  var fullimg = document.getElementById("productimagebox");
  fullimg.src = smallimg.src;
}

const elements = document.querySelectorAll(".card__skeleton");

setTimeout(function () {
  elements.forEach((element) => {
    element.classList.remove("card__skeleton");
  });
}, 500);
