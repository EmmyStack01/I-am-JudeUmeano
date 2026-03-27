let qrcodeInstance = null;

function toggleQR() {
    const modal = document.getElementById("qr-modal");
    const qrContainer = document.getElementById("qrcode");
    
    // Toggle display
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";

        // Clear previous QR code to prevent duplicates or errors
        qrContainer.innerHTML = ""; 

        // Generate new QR code
        new QRCode(qrContainer, {
            text: window.location.href,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}
