let sidemenu = document.querySelector(".menu");
let backdrower = document.querySelector(".backdrower");


function displaySideMenu(){
    sidemenu.style.left = 0
    backdrower.style.display = "initial";
}

function hideSideMenu(){
    sidemenu.style.left = "-100%";
    backdrower.style.display = "none";
}
