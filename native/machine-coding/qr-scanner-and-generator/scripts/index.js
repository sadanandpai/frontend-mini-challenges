const readerStartBtn = document.getElementById("readerStartBtn");
const readerContainer = document.getElementById("readerContainer");
const reader = document.getElementById("reader");
const resultContainer = document.getElementById("resultContainer");
const scanStatus = document.getElementById("scanStatus");
const data = document.getElementById("data");
const result = document.querySelector(".result");
const content = document.getElementById("content");
const generateQr = document.getElementById("submit");

function startScan() {
  readerStartBtn.classList.toggle("hidden");
  readerContainer.classList.toggle("hidden");
  resultContainer.classList.toggle("hidden");
  initScanner();
}

function initScanner() {
  // Scanner will be initialized in DOM inside element with id of 'reader'
  const scanner = new Html5QrcodeScanner("reader", {
    // Sets dimensions of scanning box (set relative to reader element width)
    qrbox: {
      width: 300,
      height: 300,
    },
    fps: 20, // Frames per second to attempt a scan
  });

  // Starts scanner
  scanner.render(success, error);

  function success(result) {
    scanStatus.textContent = "Success!";
    if (
      result.toLowerCase().includes("http") ||
      result.toLowerCase().includes(".com")
    ) {
      content.innerHTML = `<a href="${result}" target="_blank">${result}</a>`;
      window.open(result, "_blank");
    } else content.textContent = result;

    readerContainer.addEventListener("click", function (e) {
      if (e.target.id === "html5-qrcode-button-camera-stop") {
        scanStatus.textContent = "Pending!";
        content.innerHTML = "";
      }
    });
  }

  function error(err) {
    console.err(err);
  }
}


generateQr.addEventListener("click", (e) => {

  e.preventDefault();

  const typeNumber = parseInt(document.querySelector("input[name='typeNumber']").value);
  const qrContent = document.querySelector("input[name='data']").value;
  const level = document.getElementById("errorCorrectionLevel").value;

  if (typeNumber >= 0 && typeNumber < 41)
    createQr(typeNumber, qrContent, level);
  else alert("Invalid type number! Please enter type number between 0 and 41");
});

function createQr(typeNumber,qrData,errorCorrectionLevel) {
  const qr = qrcode(typeNumber, errorCorrectionLevel); //intialization of qr code
  qr.addData(qrData); // optionally we can specify data mode too addData(qrData,'Numeric')
  qr.make();
  document.querySelector("#form").style.display = "none";
  document.getElementById("placeHolder").innerHTML = qr.createImgTag();
}

