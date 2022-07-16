let isMenuActive = false;

document.getElementById("techdoc_proj").onclick = function () {
    location.href = "/Projects/FCCTechnicalDocumentation/main.html"
}

document.getElementById("pomodoro_proj").onclick = function () {
    location.href = "/Projects/Pomodoro/main.html"
}

document.getElementById("todo_list_proj").onclick = function () {
    location.href = "/Projects/TodoList/main.html"
}

document.getElementById("quote_generator_proj").onclick = function() {
    location.href = "Projects/QuoteGenerator/main.html"
}

document.getElementById("top_level_proj").onclick = function() {
    location.href = "Projects/TopLevelLockAndKey/index.html"
}

function handleMenuClick() {
    if(isMenuActive) {
        document.getElementById("navbar").style.display = "none"
    } else {
        document.getElementById("navbar").style.display = "flex"
    }
    isMenuActive =!isMenuActive;
}