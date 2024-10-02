import "./style.css"
const header = document.getElementById("header");
const content = document.getElementById("content");
const headerDiv = document.createElement("div")
headerDiv.setAttribute("class", "headerDiv")
headerDiv.backgroundColor 
const headerText = document.createTextNode("MAC & CHEESE RESAURANT");
const p = document.createElement("p")
p.textContent = "we have been making mac n cheese for many generations we got a wide variety to choose from!" 
p.setAttribute("class", "p")



header.appendChild(headerDiv)
headerDiv.appendChild(headerText);
content.appendChild(p);