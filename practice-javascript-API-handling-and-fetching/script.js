const myButton = document.getElementById("myBtn");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");
const driversList = document.getElementById("driversList");

/*function greet(){
    console.log("Hi Neil!");
}

myButton.addEventListener("click", greet);*/

/*function changeMessageText(){
    message.textContent = "The message changed!";
}

myButton.addEventListener("click", changeMessageText);*/

/*function greetUser(){
    const getInputName = nameInput.value;

    if (getInputName === ""){
        message.textContent = 'Please input your name first!';
    }
    else {
        message.textContent = `Good day, ${getInputName}!`;
    }

}

myButton.addEventListener("click", greetUser);*/

const driverNamesArray = [];

function addDriverName(){
    const getInputName = nameInput.value.trim();

    if (getInputName === ""){
        message.textContent = "Please input a name to be added to the list"
        return;
    }

    driverNamesArray.push(getInputName);

    const newDriversLi = document.createElement("li");
    newDriversLi.textContent = getInputName;

    driversList.appendChild(newDriversLi);

    nameInput.value = "";
    message.textContent = `Name: "${getInputName}" was added to the list!`;

}

myButton.addEventListener("click", addDriverName);