const text = document.getElementById("text");
const button = document.getElementById("btn");

function manipulateText(){
    if(text.style.display === "none"){
        text.style.display = "block";
        button.innerText = "Hide text"; 
    } else {
        text.style.display = "none";
        button.innerText = "Show text";
    }
}