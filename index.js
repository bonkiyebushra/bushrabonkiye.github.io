let isMenuActive = false;

document.getElementById("computer_repair_guy").onclick = function () {
    location.href = "/Projects/computer_repair_guy/index.html"
}

document.getElementById("merve_care_proj").onclick = function () {
    location.href = "https://mervecare.com"
}

function handleMenuClick() {
    if(isMenuActive) {
        document.getElementById("navbar").style.display = "none"
    } else {
        document.getElementById("navbar").style.display = "flex"
    }
    isMenuActive =!isMenuActive;
}