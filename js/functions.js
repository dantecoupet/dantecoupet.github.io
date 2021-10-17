function myList() {
    var element = document.getElementById("myDiv");
    element.classList.toggle("myStyle");
}

var option = {
    animation: true,
    delay: 5000
};
function Toasty() {
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}