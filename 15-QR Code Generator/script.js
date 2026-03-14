let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");

function generateQrCode() {
    if (qrText.value.trim() === "") {
        alert("Please enter some text or URL");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
        + encodeURIComponent(qrText.value);
    imgBox.style.display = "block";
}