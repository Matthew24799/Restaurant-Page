import "./style.css"
import homeLogo from "./homePageLogo.jpeg"

export function homePage() {
const home = document.querySelector(".home")
const menu = document.querySelector(".menu")
const contact = document.querySelector(".contact")
const logo = document.createElement("img");
logo.src = homeLogo;
const header = document.getElementById("header");
const content = document.getElementById("content");
const headerDiv = document.createElement("div")
headerDiv.setAttribute("class", "headerDiv")
headerDiv.backgroundColor 
const headerText = document.createTextNode("MAC & CHEESE RESAURANT");
const p = document.createElement("div")
p.textContent = "Mac & Cheese Emporium, a whimsical restaurant that has been delighting cheese lovers since its grand opening in 1987. Founded by culinary enthusiast Clara Beechwood, who grew up in a small town with a legendary family recipe, the Emporium was born from a desire to elevate the humble mac and cheese into a gourmet experience. Clara's passion for comfort food and creativity led her to experiment with artisanal cheeses and unique toppings, transforming traditional dishes into mouthwatering masterpieces. Over the years, the restaurant has become a local favorite, known for its cozy atmosphere and inventive flavors, like Truffle Bacon Bliss and Spicy Jalapeño Mac. Today, the Mac & Cheese Emporium celebrates its rich history while continually innovating, proving that comfort food can be both nostalgic and adventurous." 
p.setAttribute("class", "p")



header.appendChild(headerDiv)
headerDiv.appendChild(headerText);
headerDiv.appendChild(home)
headerDiv.appendChild(menu);
headerDiv.appendChild(contact)
content.appendChild(logo);
content.appendChild(p);
}