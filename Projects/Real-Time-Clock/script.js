const clock = document.getElementById('clock');
const dateEl = document.getElementById('date');


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

setInterval(function(){
    let dateNow = new Date();
    dateEl.innerHTML = dateNow.toLocaleDateString();
}, 1000)