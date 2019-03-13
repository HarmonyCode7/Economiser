document.addEventListener("DOMContentLoaded", function () {

let menu = document.getElementById("menu-display");
let nav = document.getElementsByTagName("nav");
let menu_icon = "&#x2630";
let close = "&times";
menu.onclick = function () {

    nav[0].classList.toggle("shownav");
    if(menu.innerHTML == menu_icon)
    {
        
        menu.innerHTML = close;
        console.log(menu.innerHTML);
    }
    else{
        menu.innerHTML = menu_icon;
        console.log(menu.innerHTML);
    }
    //menu.innerHTML = menu_icon;
}
});
