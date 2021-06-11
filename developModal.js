// Purpose: Provide modals for product information

/*
//Practice using JSON requests XMLHttpRequest();
let requestURL = 'products.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

const productsText = request.response;
const products = JSON.parse(productsText);
*/


//all elements of the modal converted to variables
const defaultModal = document.getElementById("default-modal");
const modalHeader = document.getElementById("modal-header");
const modalImage = document.getElementById("modal-img");
const quant01 = document.getElementById("quant-01");
const quant02 = document.getElementById("quant-02");
const price01 = document.getElementById("price-01");
const price02 = document.getElementById("price-02");
const availability = document.getElementById("availability");
const availableColor = document.getElementById("available-color");
var available = false;

//functions used to manipulate modal variables based on the product
//button clicked by the user
function displayPineBarkNuggets() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>Pine Bark Mini Nuggets</strong>";
    modalImage.src = "preview-images/mulch-hands.jpg";
    quant01.innerHTML = 3 + " cubic yards";
    quant02.innerHTML = 75 + " cubic yards";
    price01.innerHTML = "$ " + 29.99;
    price02.innerHTML = "$ " + 210.00;
    
    available = true;
    if (available) {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:red";
    }
}

function displayPeaGravel() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>Pea Gravel</strong>";
    modalImage.src = "preview-images/pea-gravel-hands-B.png";
    quant01.innerHTML = 10 + " cubic yards";
    quant02.innerHTML = 100 + " cubic yards";
    price01.innerHTML = "$ " + 49.99;
    price02.innerHTML = "$ " + 250.00;
    
    available = true;
    if (available) {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:red";
    }
}

function displayTopSoil() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>Top Soil</strong>";
    modalImage.src = "preview-images/top-soil-modal-image.jpg";
    quant01.innerHTML = 3 + " cubic yards";
    quant02.innerHTML = 25 + " cubic yards";
    price01.innerHTML = "$ " + 10.75;
    price02.innerHTML = "$ " + 75.00;
    
    available = false;
    if (available) {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:red";
    }
}

// hides the modal once the user clicks modal-background or modal close button
function hideModal() {
    defaultModal.classList.remove("is-active");
}

//Navigate to calculator from modal
function openCalcPage2() {
    window.open("Mulch-Area-Calculator.html", "_self");
}
//event listener for calculator button
document.getElementById("mulchCalcModal").addEventListener("click", openCalcPage2);

//event listeners for each product button
document.getElementById("pbn-button").addEventListener("click", displayPineBarkNuggets);
document.getElementById("pg-button").addEventListener("click", displayPeaGravel);
document.getElementById("ts-button").addEventListener("click", displayTopSoil);

//event listeners for elements that can close the modal
document.getElementById("default-close").addEventListener("click", hideModal);
document.getElementById("modal-bg").addEventListener("click", hideModal);







/**
//===PEA GRAVEL===
//Modal elements for manipulating
const pgModal = document.getElementById("pea-grvl-modal");

// Pea Gravel Modal functions to view/hide
//view
function peaGravelView() {   
    pgModal.classList.add("is-active");
}

//hide
function peaGravelHide() {
    pgModal.classList.remove("is-active");
}

//Pea Gravel event listeners
document.getElementById("pea-grvl-button").addEventListener("click", peaGravelView);
document.getElementById("pg-modal-Bg").addEventListener("click", peaGravelHide);
document.getElementById("pg-close").addEventListener("click", peaGravelHide);



//===TOP SOIL===
//Modal elements for manipulating
const tsModal = document.getElementById("top-soil-modal");

// Top Soil Modal functions to view/hide
//view
function topSoilView() { 
    tsModal.classList.add("is-active");
}

//hide
function topSoilHide() {
    tsModal.classList.remove("is-active");
}

//Top Soil event listeners
document.getElementById("top-soil-button").addEventListener("click", topSoilView);
document.getElementById("ts-modal-Bg").addEventListener("click", topSoilHide);
document.getElementById("ts-close").addEventListener("click", topSoilHide);



// ===CALCULATOR FOR ALL===
//Navigate to calculator from modal
function openCalcPage2() {
    window.open("Mulch-Area-Calculator.html", "_self");
}
document.getElementById("mulchCalcModal-ts").addEventListener("click", openCalcPage2);
document.getElementById("mulchCalcModal-pg").addEventListener("click", openCalcPage2);
 */