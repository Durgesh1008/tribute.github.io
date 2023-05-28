let query = document.querySelector('.query');
let searchBtn = document.querySelector('.searchBtn');

searchBtn.onclick = function () {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url,'_self');
}



var typed = new Typed(".ig", {
    strings: ["Legend","Cricketer", "Footballer", "Prime minister", "Goldmedlist","Freedom fighter"],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
}); 

