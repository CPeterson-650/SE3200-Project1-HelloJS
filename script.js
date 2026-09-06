// DOM querying
const nameHeading = document.querySelector("#name");
const aboutParagraph = document.querySelector("#about");
const changeButton = document.querySelector("#change-button");
const appList = document.querySelector("#app-list");

// Event
changeButton.addEventListener("click", function () {

    // DOM manipulation
    nameHeading.textContent = "Welcome to Charles's Webpage!";

    aboutParagraph.textContent =
        "Thanks for checking out my first JavaScript web application!";

    nameHeading.style.color = "darkred";

    // Create another DOM element
    const newItem = document.createElement("li");

    newItem.textContent =
        "A ROTC training and planning application";

    appList.appendChild(newItem);

});