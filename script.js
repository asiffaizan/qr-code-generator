//The querySelector in javascript only returns the element that matches with one of the specified CSS selectors, or a group of selectors.
//getElementById is a function that takes an id and returns an element.

const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input is empty then return from here and not add active class in wrapper
    //lets update the qrCode user input
    generateBtn.innerText = "Generating QR COde...";
     // getting a QR Code of user entered value using the qrServer, api and passing the api returned img scr to qrImg;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => { // once QR code img loaded successfully
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
    }
});