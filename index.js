let inputEl = document.getElementById("input-el");
let lenEl = document.getElementById("len-el");
let volEl = document.getElementById("vol-el");
let massEl = document.getElementById("mass-el");
let btnEl = document.getElementById("btn-el");

let meter = 3.281; // to feets
let foot = 0.304; // to meter
let liter = 0.264; // to gallons
let gallon = 3.785; // to liter
let kilo = 2.204; // to pounds
let pound = 0.453; // to kilo

btnEl.addEventListener("click", function() {
    let baseValue = inputEl.value
    lenEl.textContent = `
        ${baseValue} meter = ${(baseValue * meter).toFixed(3)} feet | 
        ${baseValue} feet = ${(baseValue * foot).toFixed(3)} meter
        `
    volEl.textContent = `
        ${baseValue} liters = ${(baseValue * liter).toFixed(3)} gallons | 
        ${baseValue} gallons = ${(baseValue * gallon).toFixed(3)} liters
        `
    massEl.textContent = `
        ${baseValue} kilos = ${(baseValue * kilo).toFixed(3)} pounds | 
        ${baseValue} pounds = ${(baseValue * pound).toFixed(3)} kilos
        `
})
