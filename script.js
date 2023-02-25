let value = document.querySelectorAll('.num');
let interval = 3000


value.forEach((valueDisplay) => {
    let startValue  = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1.0;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})


let row1 = document.getElementById('row-1');
let row2 = document.getElementById('row-2');
let btn1 = document.getElementById('about-btn-1');
let btn2 = document.getElementById('about-btn-2');
let about = document.getElementById('about');

function openPom(){
    row1.style.transform = "translateX(-8%)"
    row2.style.transform = "translateX(-120%)"
    btn1.style.color = " violet";
    btn2.style.color = "#FFFFFF";
}
function openDream(){
    row2.style.transform = "translateX(-8%)"
    row1.style.transform = "translateX(-120%)"
    btn1.style.color = "#FFFFFF"
    btn2.style.color = "violet"
}