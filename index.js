let isMenuActive = false;

function handleMenuClick() {
    if(isMenuActive) {
        document.getElementById("navbar").style.display = "none"
    } else {
        document.getElementById("navbar").style.display = "flex"
    }
    isMenuActive =!isMenuActive;
}