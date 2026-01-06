const QRCode=require("qrcode");
const link =  "https://www.linkedin.com/in/sowbharanika-s-r-b85b3a328/";
QRCode.toFile(
  "qr-code.png",
  link,
  {
    color: {
      dark: "#000000",   // QR dots
      light: "#FFFFFF", // background
    },
    width: 300,
  },
  function (err) {
    if (err) console.error(err);
    console.log("QR Code generated successfully!");
  }
);