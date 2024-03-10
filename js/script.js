Notification.requestPermission();

let prevBtn = document.querySelectorAll("#prev");
let nextBtn = document.querySelectorAll("#next");
let card = document.getElementsByClassName("card")[0];
let CategoryCard = document.getElementsByClassName("category-card")[0];

let cardSection = document.querySelector(".shop-card-section");
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


//cart function start



let cartQuantityOutput = document.getElementById("cartQuantityOutput");
function removeProductCart() {
  quantity--;
  if (quantity <= 0) {
    quantity++;
    document.getElementById("quantityMessage").style.display = "block";
    setTimeout(function () {
      document.getElementById("quantityMessage").style.display = "none";
    }, 2000);
  }
  cartQuantityOutput.innerHTML = quantity;
}
function addProductCart() {
  quantity++;
  cartQuantityOutput.innerHTML = quantity;
}
quantity = quantity;

//cart function end




//load all product when windows load



let categoryBoxes = document.querySelectorAll(".categoryBox");

categoryBoxes.forEach(function (categoryBox) {
  categoryBox.addEventListener("click", function (event) {
    let clickedBox = event.currentTarget;
    let allBoxes = document.querySelectorAll(".categoryBox");

    allBoxes.forEach(function (box) {
      box.classList.remove("active");
    });
    const a = clickedBox.id;
    getGraph(a);

    clickedBox.classList.add("active");
  });
});

fetch("json/product.json")
  .then((resJson) => resJson.json())
  .then((ProductDataJson) => {
    // ProductDataJson.forEach(products => {
    //   let newProduct = document.createElement
    // })

    let output = "";
    
    for (let item of ProductDataJson) {
      output += `
      
      <a href="/product.html?id=${item.productId}" class="shop-card" title="${item.name}" >
        <div class="shop-img-sec">
        <img src="${item.ProductImgMain}" alt="" class="mainImg">
            <img src="${item.ProductImgSide}" alt="" class="SideHoverImg">
        </div>
        <h1>${item.name}</h1>
        <p>₹${item.price}</p>
    </a>
        `;
    }

    cardSection.innerHTML = output;
    getCall();
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
  
  
  
  
  //load all product when windows end here




function chedboxfn() {
  fetch("json/product.json")
    .then((resJson) => resJson.json())
    .then((ProductDataJson) => {
      let checkboxes = document.getElementsByName("brand");
      let result = "";

      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes.checked = false;
        if (checkboxes[i].checked) {
          result += checkboxes[i].value;
          console.log(result);
          const filteredProducts1 = ProductDataJson.filter((product) => {
            return product.brand === result;
          });
          console.log(filteredProducts1);
          let filterOutput = "";

          for (let item of filteredProducts1) {
            filterOutput += `
            <a href="/product.html?id=${item.productId}" class="shop-card" title="${item.name}" >
            <div class="shop-img-sec">
                <img src="${item.ProductImgMain}" alt="" class="mainImg">
                <img src="${item.ProductImgSide}" alt="" class="SideHoverImg">
            </div>
            <h1>${item.name}</h1>
            <p>₹${item.price}</p>
        </a>
    `;
          }
          let cardSection = document.querySelector(".shop-card-section");
          cardSection.innerHTML = filterOutput;
        }
      }
    });
}

// alert
let shopBoxes = document.querySelectorAll(".shop-card");

shopBoxes.forEach(function (shopBox) {
  shopBox.addEventListener("click", function (event) {
    let clickedBox = event.currentTarget;
    const b = clickedBox.id;
    getPage(b);
    console.log(b + 23);
  });
});
console.log(123456);

const getGraph = (a) => {
 
  const accessories = [
    {
      name: "EPOMAKER SKYLOONG GK75 Dark Fairy-Tale Lite Gasket-Like Mount Wired Hot Swappable Programmable Keyboard",
      price: "₹17,500",
      img: "photo/accessories/gk75.png",
    },
    {
      name: "Cherry MX 2.0S Wired Gaming Keyboard with RGB Lighting",
      price: "₹19,500",
      img: "photo/accessories/mx2.0.png",
    },
    {
      name: "ADIUM 2.4G Office Mouse",
      price: "₹1,950",
      img: "photo/accessories/adi2.4.png",
    },
    {
      name: "PorozyKey Circus Keycaps Set 132 Keys XDA Profile PBT Sublimation Key",
      price: "₹11,500",
      img: "photo/accessories/xda132.png",
    },

    {
      name: "Ambrane 10000mAh Slim Power Bank",
      price: "₹996",
      img: "photo/accessories/am10000.png",
    },
    {
      name: "Ambrane 20000mAh Slim Power Bank",
      price: "₹2,396",
      img: "photo/accessories/am20000.png",
    },
    {
      name: "MI Power Bank 3i 20000mAh Power Bank",
      price: "₹1,996",
      img: "photo/accessories/mi20000.png",
    },
  ];
  const laptop = [
    {
      name: "Galaxy Book3 Pro 360",
      price: "₹2,00,999",
      img: "photo/laptop/samsung4.png",
    },
    {
      name: "Apple M3 Max chip with 14‑core CPU, 30‑core GPU and 16‑core Neural Engine",
      price: "₹2,00,999",
      img: "photo/laptop/mac.png",
    },
    {
      name: "ASUS ROG Strix SCAR 16 Intel Core i9 13th Gen (16 inch, 32GB, 1TB, Windows 11 Home",
      price: "₹2,20,999",
      img: "photo/laptop/rog.png",
    },
    {
      name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
      price: "₹2,25,990",
      img: "photo/laptop/delllaptop1.png",
    },
    {
      name: "ASUS TUF Gaming F15 FX507ZV-LP094W Intel Core i7 12th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home",
      price: "₹2,25,990",
      img: "photo/laptop/asustuf.png",
    },
    {
      name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
      price: "₹2,25,990",
      img: "photo/laptop/delllaptop1.png",
    },
    {
      name: "Lenovo Legion 5 15IAH7H Intel Core i7 12th Gen (15.6 inch, 16GB, 512GB, Windows 11 Home",
      price: "₹1,25,990",
      img: "photo/laptop/lenovoligoin.png",
    },
    {
      name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
      price: "₹2,25,990",
      img: "photo/laptop/delllaptop1.png",
    },
  ];
  const tv = [
    {
      name: "samsung 2.16 m QN900C Neo QLED 8K Smart TV",
      price: "₹10,99,990",
      img: "photo/tv/sam-8k-85.png",
    },
    {
      name: "samsung 1.89 m QN800C Neo QLED 8K Smart TV",
      price: "₹7,09990",
      img: "photo/tv/sam-8k-75.png",
    },
    {
      name: "samsung Q800T 163 cm (65 inch) 8K UHD QLED Smart TV ",
      price: "₹4,19,994",
      img: "photo/tv/sam-8k-65.png",
    },
    {
      name: "sony X75L Series 4K HDR Smart TV",
      price: "₹85,900",
      img: "photo/tv/sony-50.png",
    },
    {
      name: "LG QNED99 218 cm (86 inch) 8K Ultra HD LED",
      price: "₹1,369,990",
      img: "photo/tv/lg-85-8k.png",
    },
  ];
  const camera = [
    {
      name: "SONY Alpha 7 RV 60.1MP Mirrorless Camera (35 mm Sensor, Anti Dust System)",
      price: "₹349,990",
      img: "photo/camera/sonyalpa.png",
    },
    {
      name: "Nikon NIKKOR Z 400mm f/4.5 - f/32 Telephoto Prime Lens for Nikon Z Mount (STM Stepping Motor)",
      price: "₹293,995",
      img: "photo/camera/nikkorz400.png",
    },
    {
      name: "SONY Alpha 7C2 33MP Mirrorless Camera (Body Only, 35.9 x 23.9 mm Sensor, BIONZ XR Image Processor)",
      price: "₹209,995",
      img: "photo/camera/sonyalpa7.png",
    },

    {
      name: "Canon EOS R100 24.1MP DSLR Camera (18-45 mm Lens, DIGIC 8 Processor)",
      price: "₹49,999",
      img: "photo/camera/canon eos.png",
    },
    {
      name: "SONY 200-600mm f/5.6 - f/6.3 Telephoto Zoom Lens for SONY E Mount (Dust & Moisture Resistant)",
      price: "₹49,999",
      img: "photo/camera/sony200-600.png",
    },
    {
      name: "Nikon Z 30 20.9MP Mirrorless Camera (16-50 mm and 55-210 mm Lens, 23.5 x 15.7 mm Sensor, Tiltable Screen)",
      price: "₹91,999",
      img: "photo/camera/nikonz30.png",
    },
  ];
  const tablet = [
    {
      name: "ipad 11 pro",
      price: "₹1,00,999",
      img: "photo/tablet/i11pro.png",
    },
    {
      name: "galaxy tab s9 ultra",
      price: "₹1,21,999",
      img: "photo/tablet/s9ultra.png",
    },
    {
      name: "galaxy tab s9 fe",
      price: "₹52,999",
      img: "photo/tablet/sams9fe.png",
    },
    {
      name: "ipad air",
      price: "₹61,999",
      img: "photo/tablet/ipadair.png",
    },
  ];
  const moniter = [
    {
      name: "49 inch Super Ultra-wide Dual QHD",
      price: "₹30,999",
      img: "photo/monitor/sam49uhd.png",
    },
    {
      name: "21 inch Super Ultra-wide Dual QHD",
      price: "₹23,000",
      img: "photo/monitor/sam21uhd.png",
    },
  ];

  let cardOp = "";

  // getCall()
  fetch("json/product.json")
    .then((resJson) => resJson.json())
    .then((ProductDataJson) => {
      // console.log(ProductDataJson);
      const filteredProducts = ProductDataJson.filter((product) => {
          return product.catagory === a;
      });
      console.table(filteredProducts);
      console.log("Product is listed");

      let Demo123 = document.getElementById("jsonDemo");
      let output = "";

      for (let item of filteredProducts) {
        output += `
        
        <a href="/product.html?id=${item.productId}" class="shop-card" title="${item.name}" >
        <div class="shop-img-sec">
            <img src="${item.ProductImgMain}" alt="" class="mainImg">
            <img src="${item.ProductImgSide}" alt="" class="SideHoverImg">
        </div>
        <h1>${item.name}</h1>
        <p>₹${item.price}</p>
    </a>
      `;
      }

      cardSection.innerHTML = output;
      getCall();
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });

  // Update card section with generated HTML
  cardSection.innerHTML = cardOp;

  let shopBoxes = document.querySelectorAll(".shop-card");

  shopBoxes.forEach(function (shopBox) {
    shopBox.addEventListener("click", function (event) {
      let clickedBox = event.currentTarget;
      const b = clickedBox.id;
      getPage(b);
      console.log(b + 23);
    });
  });
  console.log(123456);
};

// console.log(123456);

function getCall() {
  // alert("function is called")
  let shopBoxes = document.querySelectorAll(".shop-card");

  shopBoxes.forEach(function (shopBox) {
    shopBox.addEventListener("click", function (event) {
      let clickedBox = event.currentTarget;
      const b = clickedBox.id;
    });
  });

  
}
