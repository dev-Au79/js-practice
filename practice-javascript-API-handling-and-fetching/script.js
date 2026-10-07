const myButton = document.getElementById("myBtn");
const message = document.getElementById("message");

/*function greet(){
    console.log("Hi Neil!");
}

myButton.addEventListener("click", greet);*/

function changeMessageText(){
    message.textContent = "The message changed!";
}

myButton.addEventListener("click", changeMessageText);