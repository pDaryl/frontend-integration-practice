const counter = document.getElementById("counter");
const characters = document.getElementById("charField");

characters.addEventListener("input", function(){
    counter.textContent = `Character Count: ${characters.value.length}`;
});
