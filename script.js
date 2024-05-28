let qrcodes = document.getElementById("generateqr");
let qrimage = document.querySelector(".qrbody");
let input = document.getElementById("search");
let sizes = document.getElementById("sizes");
let dwldbtn = document.getElementById("dwld");



dwldbtn.addEventListener("click", () => {
  let image = document.querySelector(".qrbody img");
  if (image !== null) {
    let attr = image.getAttribute("src");
    dwldbtn.setAttribute("href", attr);
  } else {
    dwldbtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

let size = sizes.value;

//   size checkign nd sending qr  generator app  the size
sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isinputempty();
});

//  input checking empty or not
function isinputempty() {
  if (input.value.length > 0) {
    generateQRCode();
  } else {
    alert("plz enter any value or url");
  }
}

qrcodes.addEventListener("click", (e) => {
  e.preventDefault();
  isinputempty();
});

//  function for creating qr dwld from wen
function generateQRCode() {
  qrimage.innerHTML = "";
  new QRCode(qrimage, {
    text: input.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
