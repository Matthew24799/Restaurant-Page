console.log("HEY");
const content = document.getElementById("content");
const headerDiv = document.createElement("div")
const header = document.createTextNode("MAC AND CHEESE RESAURANT");
const p = document.createTextNode("we have been making mac n cheese for many generations we got a wide variety to choose from!")

content.appendChild(headerDiv)
headerDiv.appendChild(header);
content.appendChild(p);