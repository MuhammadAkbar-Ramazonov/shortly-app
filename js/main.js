let headerPartBox = document.querySelector(".header-wrapper__links-box")
let openNavBtn = document.querySelector(".header-wrapper__nav-btn")

openNavBtn.addEventListener("click", function() {
    headerPartBox.classList.toggle("header-wrapper__links-box-on")
})