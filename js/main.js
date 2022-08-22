var elOpenMenu = document.querySelector(".button");
var elOpenList = document.querySelector(".sitenav");
var elOpenlinks = document.querySelector(".site-header__links");

elOpenMenu.addEventListener("click", function(){
    elOpenList.classList.toggle("show-block");
    elOpenMenu.classList.toggle("button--active");
    elOpenlinks.classList.toggle("show-block");
});
