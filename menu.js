const menuData = [
  {
    name: "Americano",
    description: "Hafif içimli, sade kahve severler için ideal.",
    price: "50 TL",
    image: "https://cdn.shopify.com/s/files/1/2714/0802/files/americano-nasil-yapilir-tarif_480x480.jpg?v=1688990813"
  },
  {
    name: "San Sebastian",
    description: "Yoğun çikolatalı, fırınlanmış cheesecake lezzeti.",
    price: "120 TL",
    image: "https://www.uzaypastanesi.com/images/product/SEBASTIAN-7_26Gl.jpg"
  },
  {
    name: "Tost",
    description: "Kaşar peynirli, domatesli klasik lezzet.",
    price: "70 TL",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/9247/uploads/urunresimleri/buyuk/kasarli-tost-dcb9.jpg"
  }
  
];

const container = document.getElementById('menu-container');

menuData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'menu-item';
  div.innerHTML = `
    <div class="item-image">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="item-info">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <div class="item-price">
      <span>${item.price}</span>
    </div>
  `;
  container.appendChild(div);
});
