// let categoryBoxes = document.querySelectorAll(".categoryBox");

// categoryBoxes.forEach(function (categoryBox) {
//   categoryBox.addEventListener("click", function (event) {
//     let clickedBox = event.currentTarget;
//     let allBoxes = document.querySelectorAll(".categoryBox");

//     allBoxes.forEach(function (box) {
//       box.classList.remove("active");
//     });
//     const a = clickedBox.id;
//     getGraph(a);

//     clickedBox.classList.add("active");
//   });
// });



// const getGraph = (a) => {
  
//   const mobile = [
//     {
//       productId: "mss24u",
//       name: "galaxy s24 ultra",
//       price: "₹1,39,999",
//       img: "photo/mobile/s24ultra.png",
//     },
//     {
//       productId: "mi15p",
//       name: "iphone 15 pro max",
//       price: "₹1,59,999",
//       img: "photo/mobile/15pro.png",
//     },
//     {
//       productId: "mss24p",
//       name: "galaxy s24 plus",
//       price: "₹1,00,999",
//       img: "photo/mobile/24plus.png",
//     },
//     {
//       productId: "msfo5",
//       name: "galaxy fold 5",
//       price: "₹1,69,999",
//       img: "photo/mobile/fold 5.png",
//     },
//     {
//       productId: "msfi5",
//       name: "galaxy flip 5",
//       price: "₹1,00,999",
//       img: "photo/mobile/flip 5.png",
//     },
//     {
//       productId: "mgp8p",
//       name: "pixel 8 pro",
//       price: "₹85,999",
//       img: "photo/mobile/8pro.png",
//     },
//     {
//       productId: "mi15",
//       name: "iphone 15",
//       price: "₹79,999",
//       img: "photo/mobile/15.png",
//     },
//     {
//       productId: "ms73",
//       name: "samsung A73",
//       price: "₹39,999",
//       img: "photo/mobile/a73.png",
//     },
//     {
//       productId: "mi12",
//       name: "iphone 12",
//       price: "₹49,999",
//       img: "photo/mobile/iphone 12.png",
//     },
//     {
//       productId: "mop12p",
//       name: "one plus 12 pro",
//       price: "₹79,999",
//       img: "photo/mobile/one plus 12.png",
//     },
//     {
//       productId: "mss24",
//       name: "samsung s24",
//       price: "₹89,999",
//       img: "photo/mobile/s24 (2).png",
//     },
//     {
//       productId: "mv100x",
//       name: "vivo 100x",
//       price: "₹59,999",
//       img: "photo/mobile/vivo 100x.png",
//     },
//   ];

//   const watch = [
//     {
//       name: "Galaxy Watch5 Pro LTE (45mm)",
//       price: "₹49,999",
//       img: "photo/watch/5 pro.png",
//     },
//     {
//       name: "Galaxy Watch6 Classic (Bluetooth, 47mm)",
//       price: "₹39,999",
//       img: "photo/watch/6 classic.png",
//     },
//     {
//       name: "Apple Watch SE GPS, 40mm",
//       price: "₹29,900",
//       img: "photo/watch/apple se.png",
//     },
//     {
//       name: "Apple Watch Series 9 GPS + Cellular, 41mm Gold",
//       price: "₹75,900",
//       img: "photo/watch/apple 9.png",
//     },
//   ];
//   const accessories = [
   
//     {
//       name: "EPOMAKER SKYLOONG GK75 Dark Fairy-Tale Lite Gasket-Like Mount Wired Hot Swappable Programmable Keyboard",
//       price: "₹17,500",
//       img: "photo/accessories/gk75.png",
//     },
//     {
//       name: "Cherry MX 2.0S Wired Gaming Keyboard with RGB Lighting",
//       price: "₹19,500",
//       img: "photo/accessories/mx2.0.png",
//     },
//     {
//         name: "ADIUM 2.4G Office Mouse",
//         price: "₹1,950",
//         img: "photo/accessories/adi2.4.png",
//       },
//     {
//       name: "PorozyKey Circus Keycaps Set 132 Keys XDA Profile PBT Sublimation Key",
//       price: "₹11,500",
//       img: "photo/accessories/xda132.png",
//     },
   
//     {
//         name: "Ambrane 10000mAh Slim Power Bank",
//         price: "₹996",
//         img: "photo/accessories/am10000.png",
//       },
//       {
//         name: "Ambrane 20000mAh Slim Power Bank",
//         price: "₹2,396",
//         img: "photo/accessories/am20000.png",
//       },
//       {
//         name: "MI Power Bank 3i 20000mAh Power Bank",
//         price: "₹1,996",
//         img: "photo/accessories/mi20000.png",
//       },
//   ];
//   const laptop = [
//     {
//       name: "Galaxy Book3 Pro 360",
//       price: "₹2,00,999",
//       img: "photo/laptop/samsung4.png",
//     },
//     {
//       name: "Apple M3 Max chip with 14‑core CPU, 30‑core GPU and 16‑core Neural Engine",
//       price: "₹2,00,999",
//       img: "photo/laptop/mac.png",
//     },
//     {
//       name: "ASUS ROG Strix SCAR 16 Intel Core i9 13th Gen (16 inch, 32GB, 1TB, Windows 11 Home",
//       price: "₹2,20,999",
//       img: "photo/laptop/rog.png",
//     },
//     {
//       name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
//       price: "₹2,25,990",
//       img: "photo/laptop/delllaptop1.png",
//     },
//     {
//       name: "ASUS TUF Gaming F15 FX507ZV-LP094W Intel Core i7 12th Gen Gaming Laptop (16GB, 512GB SSD, Windows 11 Home",
//       price: "₹2,25,990",
//       img: "photo/laptop/asustuf.png",
//     },
//     {
//       name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
//       price: "₹2,25,990",
//       img: "photo/laptop/delllaptop1.png",
//     },
//     {
//       name: "Lenovo Legion 5 15IAH7H Intel Core i7 12th Gen (15.6 inch, 16GB, 512GB, Windows 11 Home",
//       price: "₹1,25,990",
//       img: "photo/laptop/lenovoligoin.png",
//     },
//     {
//       name: "DELL Alienware X14 R2 Intel Core i7 13th Gen (14 inch, 32GB, 1TB, Windows 11 Home",
//       price: "₹2,25,990",
//       img: "photo/laptop/delllaptop1.png",
//     },
//   ];
//   const tv = [
//     {
//       name: "samsung 2.16 m QN900C Neo QLED 8K Smart TV",
//       price: "₹10,99,990",
//       img: "photo/tv/sam-8k-85.png",
//     },
//     {
//       name: "samsung 1.89 m QN800C Neo QLED 8K Smart TV",
//       price: "₹7,09990",
//       img: "photo/tv/sam-8k-75.png",
//     },
//     {
//       name: "samsung Q800T 163 cm (65 inch) 8K UHD QLED Smart TV ",
//       price: "₹4,19,994",
//       img: "photo/tv/sam-8k-65.png",
//     },
//     {
//       name: "sony X75L Series 4K HDR Smart TV",
//       price: "₹85,900",
//       img: "photo/tv/sony-50.png",
//     },
//     {
//       name: "LG QNED99 218 cm (86 inch) 8K Ultra HD LED",
//       price: "₹1,369,990",
//       img: "photo/tv/lg-85-8k.png",
//     },
    
//   ];
//   const sound = [
//     {
//       name: "Samsung Galaxy Buds2 Pro",
//       price: "₹16,490",
//       img: "photo/sound/buds2.png",
//     },
//     {
//       name: "apple AirPods (3rd generation)",
//       price: "₹21,800",
//       img: "photo/sound/apple buds.png",
//     },
//     {
//       name: "Sony WH-CH520",
//       price: "₹4,800",
//       img: "photo/sound/Sony WH-CH520.png",
//     },
//     {
//       name: "apple airpods max",
//       price: "₹54,800",
//       img: "photo/sound/apple headphone.png",
//     },
//   ];
//   const camera = [
//     {
//         name: "SONY Alpha 7 RV 60.1MP Mirrorless Camera (35 mm Sensor, Anti Dust System)",
//         price: "₹349,990",
//         img: "photo/camera/sonyalpa.png",
//       },
//     {
//         name: "Nikon NIKKOR Z 400mm f/4.5 - f/32 Telephoto Prime Lens for Nikon Z Mount (STM Stepping Motor)",
//         price: "₹293,995",
//         img: "photo/camera/nikkorz400.png",
//       },
//     {
//         name: "SONY Alpha 7C2 33MP Mirrorless Camera (Body Only, 35.9 x 23.9 mm Sensor, BIONZ XR Image Processor)",
//         price: "₹209,995",
//         img: "photo/camera/sonyalpa7.png",
//       },
    
//     {
//       name: "Canon EOS R100 24.1MP DSLR Camera (18-45 mm Lens, DIGIC 8 Processor)",
//       price: "₹49,999",
//       img: "photo/camera/canon eos.png",
//     },
//     {
//       name: "SONY 200-600mm f/5.6 - f/6.3 Telephoto Zoom Lens for SONY E Mount (Dust & Moisture Resistant)",
//       price: "₹49,999",
//       img: "photo/camera/sony200-600.png",
//     },
//     {
//       name: "Nikon Z 30 20.9MP Mirrorless Camera (16-50 mm and 55-210 mm Lens, 23.5 x 15.7 mm Sensor, Tiltable Screen)",
//       price: "₹91,999",
//       img: "photo/camera/nikonz30.png",
//     },
    
//   ];
//   const tablet = [
//     {
//       name: "ipad 11 pro",
//       price: "₹1,00,999",
//       img: "photo/tablet/i11pro.png",
//     },
//     {
//       name: "galaxy tab s9 ultra",
//       price: "₹1,21,999",
//       img: "photo/tablet/s9ultra.png",
//     },
//     {
//       name: "galaxy tab s9 fe",
//       price: "₹52,999",
//       img: "photo/tablet/sams9fe.png",
//     },
//     {
//       name: "ipad air",
//       price: "₹61,999",
//       img: "photo/tablet/ipadair.png",
//     },
//   ];
//   const moniter = [
//     {
//       name: "49 inch Super Ultra-wide Dual QHD",
//       price: "₹30,999",
//       img: "photo/monitor/sam49uhd.png",
//     },
//     {
//       name: "21 inch Super Ultra-wide Dual QHD",
//       price: "₹23,000",
//       img: "photo/monitor/sam21uhd.png",
//     },
//   ];

//   let cardSection = document.querySelector(".shop-card-section");
//   let cardOp = "";

//   // Depending on the value of 'a', select appropriate data array
//   let data;
//   if (a === "mobile") {
//     data = mobile;
//   } else if (a === "watch") {
//     data = watch;
//   } else if (a === "moniter") {
//     data = moniter;
//   } else if (a === "tablet") {
//     data = tablet;
//   } else if (a === "camera") {
//     data = camera;
//   } else if (a === "sound") {
//     data = sound;
//   } else if (a === "accessories") {
//     data = accessories;
//   } else if (a === "laptop") {
//     data = laptop;
//   } else if (a === "tv") {
//     data = tv;
//   }

//   // Generate HTML cards for the selected data
//   data.forEach(function (item) {
//     cardOp += `
//           <a href="product.html" class="shop-card" title="${item.name}" id="${item.name}">
//               <div class="shop-img-sec">
//                   <img src="${item.img}" alt="">
//               </div>
//               <h1>${item.name}</h1>
//               <p>${item.price}</p>
//           </a>
//       `;
//   });

//   // Update card section with generated HTML
//   cardSection.innerHTML = cardOp;



//   let shopBoxes = document.querySelectorAll(".shop-card");

//   shopBoxes.forEach(function (shopBox) {
//     shopBox.addEventListener("click", function (event) {
//       let clickedBox = event.currentTarget;
//       const b = clickedBox.id;
//       getPage(b);
//       console.log(b + 23);
//     });
//   });
//   console.log(123456);

// }
// let shopBoxes = document.querySelectorAll(".shop-card");

// shopBoxes.forEach(function (shopBox) {
//   shopBox.addEventListener("click", function (event) {
//     let clickedBox = event.currentTarget;
//     const b = clickedBox.id;
//     getPage(b);
//     console.log(b + 23 +"232131353351===========");
//   });
// });
// console.log(123456);

// const getValuesIn = (cv) => {
//   console.log(cv)
// }
// getValuesIn()