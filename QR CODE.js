function generateQR() {
  let qrdiv = document.getElementById("qrcode");
  qrdiv.innerHTML = ""; // Clear previous QR codes
  let text = document.getElementById("text").value.trim();

  if (text !== "") {
    qrdiv.style.marginTop = "50px";
    qrdiv.style.marginBottom = "50px";
    qrdiv.style.display = "flex";
    qrdiv.style.justifyContent = "center";
    qrdiv.style.alignItems = "center";
    qrdiv.style.height = "400px"; // Ensure the container has a height
    new QRCode(qrdiv, {
      text: text,
      width: 400,
      height: 400,
    });
  } else {
    alert("Please enter a valid text");
  }
}
