// Sayfa URL'sini QR'a dönüştür
const url = window.location.href;

new QRCode(document.getElementById("qrcode"), {
  text: url,
  width: 200,
  height: 200
});

// URL'den masa bilgisi al
const path = window.location.pathname.replace("/", "");
if (path) {
  document.getElementById("masainfo").textContent = `Masa: ${path} Menüsü`;
}
