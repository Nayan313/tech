const mobileData = [
    {
      name: "galaxy s24 ultra",
      price: "₹ 1,39,999",
      img: "photo/mobile/s24ultra.png",
    },
    {
      name: "iphone 15 pro max",
      price: "₹ 1,59,999",
      img: "photo/mobile/15pro.png",
    },
    {
      name: "galaxy s24 plus",
      price: "₹ 1,00,999",
      img: "photo/mobile/24plus.png",
    },
    {
      name: "galaxy fold 5",
      price: "₹ 1,69,999",
      img: "photo/mobile/fold 5.png",
    },
    {
      name: "galaxy flip 5",
      price: "₹ 1,00,999",
      img: "photo/mobile/flip 5.png",
    },
    {
      name: "galaxy s24",
      price: "₹ 89,999",
      img: "photo/mobile/s24.png",
    },
    {
      name: "pixel 8 pro",
      price: "₹ 85,999",
      img: "photo/mobile/8pro.png",
    },
    {
      name: "iphone 15",
      price: "₹ 79,999",
      img: "photo/mobile/15.png",
    },
  ];
  
  const Category = [
    {
      img: "photo/category/mobile.png",
      name: "Mobile",
    },
    {
      img: "photo/category/laptop.png",
      name: "Laptop",
    },
    {
      img: "photo/category/camera.png",
      name: "Camera",
    },
    {
      img: "photo/category/tablet.png",
      name: "Tablet",
    },
    {
      img: "photo/category/ps.png",
      name: "Console",
    },
    {
      img: "photo/category/headphone.png",
      name: "Headphone",
    },
  ];
  
  let cardSection = document.getElementById("cardSection");
  let CategoryCardSection = document.getElementById("CategorySection");
  
  let cardOp = "";
  
  for (item of mobileData) {
    cardOp += `
      <a href="product.html" class="card">
              <div class="img-section">
                  <img src="${item.img}" alt="">
              </div>
              <div class="detail-section">
                  <h3 class="name">${item.name}</h3>
                  <p class="price">${item.price}</p>
              </div>
          </a>
      `;
  }
  cardSection.innerHTML = cardOp;
  
  let catCardOp = "";
  
  for (item of Category) {
    catCardOp += `
    <div class="category-card" id="${item.name}">
    <img src="${item.img}" alt="">
    <p>${item.name}</p>
  </div>
      `;
  }
  CategoryCardSection.innerHTML = catCardOp;