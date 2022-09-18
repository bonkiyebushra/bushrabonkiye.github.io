let isMenuActive = false;

document.getElementById("techdoc_proj").onclick = function () {
    location.href = "/Projects/FCCTechnicalDocumentation/main.html"
}

document.getElementById("pomodoro_proj").onclick = function () {
    location.href = "/Projects/Pomodoro/main.html"
}

document.getElementById("heynerdfixit_proj").onclick = function () {
    location.href = "/Projects/HeyNerdFixIt/index.html"
}

document.getElementById("merve_care_proj").onclick = function () {
    location.href = "/Projects/Merve-Care/index.html"
}

function handleMenuClick() {
    if(isMenuActive) {
        document.getElementById("navbar").style.display = "none"
    } else {
        document.getElementById("navbar").style.display = "flex"
    }
    isMenuActive =!isMenuActive;
}