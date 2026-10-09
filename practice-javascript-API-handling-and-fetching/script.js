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

function renderDriverList () {
    driversList.innerHTML = '';

    driverNamesArray.forEach((getInputName, index) => {
        const newDriversLi = document.createElement("li");
        newDriversLi.textContent = getInputName;

        newDriversLi.addEventListener('click', () => {
            deleteName(index);
        })

        driversList.appendChild(newDriversLi);

    })
}

function deleteName(index){
    driverNamesArray.splice(index, 1);

    renderDriverList();
}


myButton.addEventListener("click", () => {
    const getInputName = nameInput.value.trim();

    if (getInputName === ""){
        message.textContent = "Please input a name to be added to the list"
        return;
    }

    driverNamesArray.push(getInputName);

    renderDriverList();

    nameInput.value = "";
    nameInput.focus();
    message.textContent = `Name: "${getInputName}" was added to the list!`;
});