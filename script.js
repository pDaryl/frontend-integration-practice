const text = document.getElementById("text");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

var fontSize = 16;

increaseBtn.addEventListener("click", function(){
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
})

decreaseBtn.addEventListener("click", function(){
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
})
