function toggleQR() {
    const modal = document.getElementById("qr-modal");
    const qrContainer = document.getElementById("qrcode");
    
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
        qrContainer.innerHTML = ""; // Clear old/broken code

        // USE THE DIRECT URL INSTEAD OF WINDOW.LOCATION.HREF
        // This ensures the custom domain change doesn't break the scan
        const siteUrl = "https://emmystack01.github.io/I-am-JudeUmeano/";

        new QRCode(qrContainer, {
            text: siteUrl, 
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}
