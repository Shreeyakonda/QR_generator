function generateQRCode() {
  var container = document.getElementById("qrcode");
  container.innerHTML = ""; // Clear previous QR

  var url = document.getElementById("link").value;

  if (url.trim() === "") {
    alert("Please enter a link!");
    return;
  }

  new QRCode(container, {
    text: url,
    width: 200,
    height: 200
  });

  // Show download button after QR is generated
  document.getElementById("downloadBtn").style.display = "inline-block";
}

function downloadQRCode() {
  const qrImage = document.querySelector('#qrcode img');

  if (!qrImage) {
    alert("Please generate a QR code first.");
    return;
  }

  const link = document.createElement('a');
  link.href = qrImage.src;
  link.download = 'qr-code.png';
  link.click();
}
