let openButton = document.getElementById("navOpeningButton");
let closeButton = document.getElementById("navClosingButton");

openButton.addEventListener("click", function () 
{
    let navBar = document.getElementById("mainNavbar");
    navBar.style.padding = "15px";
    navBar.style.width = "250px";
}, false);

closeButton.addEventListener("click", function () 
{
    let navBar = document.getElementById("mainNavbar");
    navBar.style.padding = "0";
    navBar.style.width = "0";
}, false);