const inputField = document.getElementById("inputField");
const wordCountDisplay = document.getElementById("word-Counter");
const characters = document.getElementById("char-Counter");

inputField.addEventListener("input", function(){
    const words = inputField.value.trim().split(/\s+/);
    const wordCount = inputField.value.trim() === "" ? 0 : words.length;

    wordCountDisplay.textContent = `Word Count: ${wordCount}`;
     characters.textContent = `Character Count: ${inputField.value.length}`

    if(words.length > 50){
        alert("you have exceeded the max amount of words. (50 words)");
    }
});