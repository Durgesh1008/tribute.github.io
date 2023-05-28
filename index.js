var loader = document.getElementById("reloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-changer');
darkMode.addEventListener('click',function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})