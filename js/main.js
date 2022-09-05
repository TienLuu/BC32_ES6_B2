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
                <img src="${item.src}" alt="Glasses Img" data-id="${item.id}" class="img-fluid">
            </div>
        `
      );
   }, "");

   domByQuery("#vglassesList").innerHTML = html;
};

// Chọn sản phẩm
const glassesPicker = (id) => {
   return dataGlasses.filter((item) => item.id === id);
};

// Hiển thị sản phẩm vào mẫu
const glassesChange = (glasses) => {
   let html = `<img src="${glasses.virtualImg}" alt="Glasses Img">`;
   domByQuery("#avatar").innerHTML = html;
};

// Hiển thị thông tin sản phẩm
const showInfo = (obj) => {
   let html = obj.reduce((result, item) => {
      return (
         result +
         `
            <h3>${item.name} - ${item.brand} (${item.color})</h3>
            <span class="badge badge-danger">$${item.price}</span>
            <span class="text-success">Stocking</span>
            <p>${item.description}</p>
        `
      );
   }, "");

   domByQuery("#glassesInfo").innerHTML = html;
};

display(dataGlasses);

domByQuery("#vglassesList").addEventListener("click", function (e) {
   // B1: DOM
   const id = e.target.getAttribute("data-id");
   // Xử lý lỗi khi click vào vùng không có thuộc tính data-id
   if (!id) {
      domByQuery("#glassesInfo").style.display = "none";
      domByQuery("#avatar").removeChild(domByQuery("#avatar").firstChild);
      return;
   }

   // B2: Hiển thị
   domByQuery("#glassesInfo").style.display = "block";
   // Tìm kiếm sản phẩm khi người dùng click
   const glasses = glassesPicker(id);
   // Gắn sản phẩm vào model
   glassesChange(...glasses);
   // Thông tin sản phẩm
   showInfo(glasses);
});
