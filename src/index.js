import "./style.css"
const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const contact = document.querySelector(".contact")

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
headerDiv.appendChild(home)
headerDiv.appendChild(menu);
headerDiv.appendChild(contact)
content.appendChild(p);