let counter = 0;
const counterDisplay = document.getElementById("num")

function updateCounter(){
    counterDisplay.innerText = `Counter: ${counter}`;
}

function countUp(){
    ++counter;
    updateCounter();
}

function countDown(){
   --counter;
   updateCounter();
}

function reset(){
    counter = 0;
    updateCounter();
}