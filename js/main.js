// DATA
let dataGlasses = [
   {
      id: "G1",
      src: "./img/g1.jpg",
      virtualImg: "./img/v1.png",
      brand: "Armani Exchange",
      name: "Bamboo wood",
      color: "Brown",
      price: 150,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
   },
   {
      id: "G2",
      src: "./img/g2.jpg",
      virtualImg: "./img/v2.png",
      brand: "Arnette",
      name: "American flag",
      color: "American flag",
      price: 150,
      description:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
   },
   {
      id: "G3",
      src: "./img/g3.jpg",
      virtualImg: "./img/v3.png",
      brand: "Burberry",
      name: "Belt of Hippolyte",
      color: "Blue",
      price: 100,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
   },
   {
      id: "G4",
      src: "./img/g4.jpg",
      virtualImg: "./img/v4.png",
      brand: "Coarch",
      name: "Cretan Bull",
      color: "Red",
      price: 100,
      description: "In assumenda earum eaque doloremque, tempore distinctio.",
   },
   {
      id: "G5",
      src: "./img/g5.jpg",
      virtualImg: "./img/v5.png",
      brand: "D&G",
      name: "JOYRIDE",
      color: "Gold",
      price: 180,
      description:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
   },
   {
      id: "G6",
      src: "./img/g6.jpg",
      virtualImg: "./img/v6.png",
      brand: "Polo",
      name: "NATTY ICE",
      color: "Blue, White",
      price: 120,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
   },
   {
      id: "G7",
      src: "./img/g7.jpg",
      virtualImg: "./img/v7.png",
      brand: "Ralph",
      name: "TORTOISE",
      color: "Black, Yellow",
      price: 120,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
   },
   {
      id: "G8",
      src: "./img/g8.jpg",
      virtualImg: "./img/v8.png",
      brand: "Polo",
      name: "NATTY ICE",
      color: "Red, Black",
      price: 120,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
   },
   {
      id: "G9",
      src: "./img/g9.jpg",
      virtualImg: "./img/v9.png",
      brand: "Coarch",
      name: "MIDNIGHT VIXEN REMIX",
      color: "Blue, Black",
      price: 120,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
   },
];

// DOM
const domByQuery = (id) => document.querySelector(id);

const domByQueryAll = (id) => document.querySelectorAll(id);

// Hiển thị danh sách glasses
const display = (obj) => {
   let html = obj.reduce((result, item) => {
      return (
         result +
         `
            <div class="vglasses__items col-6 col-md-4">
                <img src="${item.src}" alt="Glasses Img" class="img-fluid" data-id="${item.id}">
            </div>
        `
      );
   }, "");

   domByQuery("#vglassesList").innerHTML = html;
};

// Hiển thị thông tin sản phẩm
const displayGlassesInfo = (glasses) => {
   let html = `
            <h3>${glasses.name} - ${glasses.brand} (${glasses.color})</h3>
            <span class="badge badge-danger">$${glasses.price}</span>
            <span class="text-success">Stocking</span>
            <p>${glasses.description}</p>
        `;

   domByQuery("#glassesInfo").innerHTML = html;
};

// Hiển thị kính trên mẫu
const displayGlasses = (glasses) => {
   const html = `<img src="${glasses.virtualImg}" alt="Glasses Img" id="${glasses.id}">`;
   domByQuery("#avatar").innerHTML = html;
};

// Tìm kính theo id
const findGlasses = (id) => dataGlasses.filter((item) => item.id === id);

// Chọn kính thử
const glassesPicker = (e) => {
   const id = e.target.getAttribute("data-id");
   // Kiểm tra vùng click vì hình ánh sản phẩm bị lỗi (không cắt đúng kính thước)
   if (!id) {
      return;
   }
   // Tìm kính theo id
   const glasses = findGlasses(id);
   // UI
   handleChangeGlasses(...glasses);
};

// Xử lý sự kiện thay đổi kính
const handleChangeGlasses = (glasses) => {
   // B1: Hiển thị kính trên mẫu
   displayGlasses(glasses);

   // B2: Hiển thị thông tin kính
   domByQuery("#glassesInfo").style.display = "block";
   displayGlassesInfo(glasses);
};

// Hiển thị danh sách sản phẩm kính
display(dataGlasses);

// Thử kính bằng click vào kính trong danh sách kính
domByQuery("#vglassesList").addEventListener("click", glassesPicker);

// Thử kính bằng btn prev, next với danh sách kính
domByQuery(".vglasses__card").addEventListener("click", function (e) {
   const type = e.target.getAttribute("id");
   const imgEls = domByQuery("#avatar img");

   if (!imgEls) return;
   let currIndex = dataGlasses.findIndex((glasses) => glasses.id === imgEls.id);

   if (type === "prevBtn") {
      const prevIndex =
         currIndex - 1 < 0 ? dataGlasses.length - 1 : currIndex - 1;

      const glasses = dataGlasses[prevIndex];
      displayGlasses(glasses);
      displayGlassesInfo(glasses);
   }
   if (type === "nextBtn") {
      const nextIndex =
         currIndex + 1 > dataGlasses.length - 1 ? 0 : currIndex + 1;

      const glasses = dataGlasses[nextIndex];
      displayGlasses(glasses);
      displayGlassesInfo(glasses);
   }
});
