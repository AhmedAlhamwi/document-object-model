const title = document.querySelector(".title") 
title.textContent= "Planeten";
const subTitle = document.querySelector(".sub-title") 
subTitle.textContent = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];

const changeContent = document.querySelector(".content-list");
changeContent.innerHTML = "";
for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    changeContent.innerHTML += `<li> ${planet} </li>`;
}



function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}