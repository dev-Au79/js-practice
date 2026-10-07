const myButton = document.getElementById("myBtn");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");

/*function greet(){
    console.log("Hi Neil!");
}

myButton.addEventListener("click", greet);*/

/*function changeMessageText(){
    message.textContent = "The message changed!";
}

myButton.addEventListener("click", changeMessageText);*/

function greetUser(){
    const getInputName = nameInput.value;

    if (getInputName === ""){
        message.textContent = 'Please input your name first!';
    }
    else {
        message.textContent = `Good day, ${getInputName}!`;
    }

}

myButton.addEventListener("click", greetUser);