var historic = document.getElementById("historic");
var content = document.getElementById("content");

function showHistoric() {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('block', 'h-4/5');
        historic.classList.add('h-full');
        historic.classList.remove('w-14');
    } else {
        content.classList.remove('block');
        content.classList.add('hidden', 'h-4/5');
        historic.classList.remove('h-full', 'w-fit');
        historic.classList.add('w-14');
    }
    return false;
}

var sideBar = document.getElementById("sidebar");
var iconBurger = document.getElementById("icons");
var main = document.getElementById("main");

function showSidebar() {
    if (sideBar.classList.contains('w-16')) {

        sideBar.classList.remove('w-16');
        sideBar.classList.add('w-fit');
        iconBurger.classList.add('bi-x-lg');
        iconBurger.classList.remove('bi-list');
        main.classList.add("ml-48")


    } else {
        sideBar.classList.remove('w-fit');
        sideBar.classList.add('w-16');
        iconBurger.classList.remove('bi-x-lg');
        iconBurger.classList.add('bi-list');
        main.classList.remove("ml-48")
    }
    return false;
}
var htmlElement = document.body.parentNode;;
var iconSunMoon = document.querySelector(".bi-sun-fill");
var iconBurger = document.getElementById("icons");

function changeTheme() {
    if (iconSunMoon.classList.contains('bi-sun-fill')) {
        iconSunMoon.classList.add('bi-moon-fill');
        iconSunMoon.classList.remove('bi-sun-fill');
        htmlElement.classList.add("dark");
    } else {
        iconSunMoon.classList.remove('bi-moon-fill');
        iconSunMoon.classList.add('bi-sun-fill');
        htmlElement.classList.remove("dark");
    }
    return false;
}

function showaside() {
    var brandLogo = document.getElementById('brand-logo')
    var navbar = document.getElementById('navbar')
    var title = document.querySelector(".title");
    var main = document.getElementById("main");

    if (sideBar.classList.contains('w-16')) {
        sideBar.classList.remove('w-16');

        sideBar.classList.add('w-48');
        navbar.classList.add('ml-48');
        // iconBurger.classList.add('bi-x-lg');
        // iconBurger.classList.remove('bi-list');
        main.classList.add("ml-48")
        main.classList.remove("ml-16")
        title.classList.remove('hidden');
        brandLogo.classList.remove('hidden');

    } else {
        sideBar.classList.remove('w-48');
        sideBar.classList.add('w-16');
        navbar.classList.remove('ml-48');
        // iconBurger.classList.remove('bi-x-lg');
        // iconBurger.classList.add('bi-list');
        main.classList.remove("ml-48")
        main.classList.add("ml-16")
        brandLogo.classList.add('hidden');
        title.classList.add('hidden');

    }
    return false;
}