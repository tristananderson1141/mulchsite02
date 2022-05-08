// Purpose: Provide modals for product information


//Practice using JSON requests XMLHttpRequest();
//Production URL
let requestURL = 'https://lawnlife.biz/products.json';

//Testing URL
//let requestURL = 'http://localhost/mulchsite02/products.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

// stores json product data
let productLine = {};

request.onload = function() {
    const productsText = request.response;
    const products = JSON.parse(productsText);

    // function call to populate productLine for use by Modal Creation
    populateProductLine(products);    

    // function call to populate preview table
    populateTableData(productLine);
}

// =============== BEGIN PRODUCT PREVIEW TABLE POPULATION ===============
// populates the html Table Data with the json objects Name and Price
// for the most popular objects
function populateTableData(obj) {
    
    document.getElementById("017").innerHTML = obj[16].name;
    document.getElementById("017p").innerHTML = obj[16].price01;

    document.getElementById("018").innerHTML = obj[17].name;
    document.getElementById("018p").innerHTML = obj[17].price01;

    document.getElementById("015").innerHTML = obj[14].name;
    document.getElementById("015p").innerHTML = obj[14].price01;

    document.getElementById("016").innerHTML = obj[15].name;
    document.getElementById("016p").innerHTML = obj[15].price01;

    document.getElementById("019").innerHTML = obj[18].name;
    document.getElementById("019p").innerHTML = obj[18].price01;

    document.getElementById("001").innerHTML = obj[0].name;
    document.getElementById("001p").innerHTML = obj[0].price01;

    document.getElementById("002").innerHTML = obj[1].name;
    document.getElementById("002p").innerHTML = obj[1].price01;

    document.getElementById("003").innerHTML = obj[2].name;
    document.getElementById("003p").innerHTML = obj[2].price01;

    document.getElementById("008").innerHTML = obj[7].name;
    document.getElementById("008p").innerHTML = obj[7].price01;

    document.getElementById("007").innerHTML = obj[6].name;
    document.getElementById("007p").innerHTML = obj[6].price01;

    document.getElementById("009").innerHTML = obj[8].name;
    document.getElementById("009p").innerHTML = obj[8].price01;

    document.getElementById("006").innerHTML = obj[5].name;
    document.getElementById("006p").innerHTML = obj[5].price01;
}

// =============== END PRODUCT PREVIEW TABLE POPULATION ===============


//populates global variable productLine with the json objects
function populateProductLine(obj) {
    var i;
    for (i = 0; i < obj.length; i++) {
        productLine[i] = obj[i];
    }
}


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

//===PINE BARK===
//===Pine Bark Nuggets===
function displayPineBarkNuggets() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[0].name + "</strong>";
    modalImage.src = productLine[0].image;
    quant01.innerHTML = productLine[0].quantity01;
    quant02.innerHTML = productLine[0].quantity02;
    price01.innerHTML = productLine[0].price01;
    price02.innerHTML = productLine[0].price02;
    
    available = productLine[0].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Pine Bark Mini Nuggets===
function displayPineBarkMiniNuggets() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[1].name + "</strong>";
    modalImage.src = productLine[1].image;
    quant01.innerHTML = productLine[1].quantity01;
    quant02.innerHTML = productLine[1].quantity02;
    price01.innerHTML = productLine[1].price01;
    price02.innerHTML = productLine[1].price02;
    
    available = productLine[1].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Pine Bark Mulch===
function displayPineBarkMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[2].name + "</strong>";
    modalImage.src = productLine[2].image;
    quant01.innerHTML = productLine[2].quantity01;
    quant02.innerHTML = productLine[2].quantity02;
    price01.innerHTML = productLine[2].price01;
    price02.innerHTML = productLine[2].price02;
    
    available = productLine[2].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Pine Bark Soil Conditioner===
function displayPineBarkSoilCond() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[3].name + "</strong>";
    modalImage.src = productLine[3].image;
    quant01.innerHTML = productLine[3].quantity01;
    quant02.innerHTML = productLine[3].quantity02;
    price01.innerHTML = productLine[3].price01;
    price02.innerHTML = productLine[3].price02;
    
    available = productLine[3].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,50,50)";
    }
}

//===Nursery Mulch===
function displayNurseryMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[4].name + "</strong>";
    modalImage.src = productLine[4].image;
    quant01.innerHTML = productLine[4].quantity01;
    quant02.innerHTML = productLine[4].quantity02;
    price01.innerHTML = productLine[4].price01;
    price02.innerHTML = productLine[4].price02;
    
    available = productLine[4].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}


//===CYPRESS MULCH BLEND===
//===Natural Cypress Blend===
function displayNaturalCypressBlend() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[5].name + "</strong>";
    modalImage.src = productLine[5].image;
    quant01.innerHTML = productLine[5].quantity01;
    quant02.innerHTML = productLine[5].quantity02;
    price01.innerHTML = productLine[5].price01;
    price02.innerHTML = productLine[5].price02;
    
    available = productLine[5].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Brown Cypress Blend===
function displayBrownCypressBlend() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[6].name + "</strong>";
    modalImage.src = productLine[6].image;
    quant01.innerHTML = productLine[6].quantity01;
    quant02.innerHTML = productLine[6].quantity02;
    price01.innerHTML = productLine[6].price01;
    price02.innerHTML = productLine[6].price02;
    
    available = productLine[6].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Red Cypress Blend===
function displayRedCypressBlend() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[7].name + "</strong>";
    modalImage.src = productLine[7].image;
    quant01.innerHTML = productLine[7].quantity01;
    quant02.innerHTML = productLine[7].quantity02;
    price01.innerHTML = productLine[7].price01;
    price02.innerHTML = productLine[7].price02;
    
    available = productLine[7].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Black Cypress Blend===
function displayBlackCypressBlend() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[8].name + "</strong>";
    modalImage.src = productLine[8].image;
    quant01.innerHTML = productLine[8].quantity01;
    quant02.innerHTML = productLine[8].quantity02;
    price01.innerHTML = productLine[8].price01;
    price02.innerHTML = productLine[8].price02;
    
    available = productLine[8].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}


//===COLORED MULCH===
//===Russet Red===
function displayRussetRed() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[9].name + "</strong>";
    modalImage.src = productLine[9].image;
    quant01.innerHTML = productLine[9].quantity01;
    quant02.innerHTML = productLine[9].quantity02;
    price01.innerHTML = productLine[9].price01;
    price02.innerHTML = productLine[9].price02;
    
    available = productLine[9].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Brown Mulch===
function displayBrownMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[10].name + "</strong>";
    modalImage.src = productLine[10].image;
    quant01.innerHTML = productLine[10].quantity01;
    quant02.innerHTML = productLine[10].quantity02;
    price01.innerHTML = productLine[10].price01;
    price02.innerHTML = productLine[10].price02;
    
    available = productLine[10].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Black Mulch===
function displayBlackMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[11].name + "</strong>";
    modalImage.src = productLine[11].image;
    quant01.innerHTML = productLine[11].quantity01;
    quant02.innerHTML = productLine[11].quantity02;
    price01.innerHTML = productLine[11].price01;
    price02.innerHTML = productLine[11].price02;
    
    available = productLine[11].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}


//===HARDWOOD MULCH===
//===Hardwood Mulch===
function displayHardwoodMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[12].name + "</strong>";
    modalImage.src = productLine[12].image;
    quant01.innerHTML = productLine[12].quantity01;
    quant02.innerHTML = productLine[12].quantity02;
    price01.innerHTML = productLine[12].price01;
    price02.innerHTML = productLine[12].price02;
    
    available = productLine[12].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}


//===CEDAR MULCH===
//===Cedar Mulch===
function displayCedarMulch() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[13].name + "</strong>";
    modalImage.src = productLine[13].image;
    quant01.innerHTML = productLine[13].quantity01;
    quant02.innerHTML = productLine[13].quantity02;
    price01.innerHTML = productLine[13].price01;
    price02.innerHTML = productLine[13].price02;
    
    available = productLine[13].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}


//===SAND===
//===Concrete Sand===
function displayConcreteSand() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[14].name + "</strong>";
    modalImage.src = productLine[14].image;
    quant01.innerHTML = productLine[14].quantity01;
    quant02.innerHTML = productLine[14].quantity02;
    price01.innerHTML = productLine[14].price01;
    price02.innerHTML = productLine[14].price02;
    
    available = productLine[14].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===Mortar Sand===
function displayMortarSand() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[15].name + "</strong>";
    modalImage.src = productLine[15].image;
    quant01.innerHTML = productLine[15].quantity01;
    quant02.innerHTML = productLine[15].quantity02;
    price01.innerHTML = productLine[15].price01;
    price02.innerHTML = productLine[15].price02;
    
    available = productLine[15].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===GRAVEL===
//===Pea Gravel===
function displayPeaGravel() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[16].name + "</strong>";
    modalImage.src = productLine[16].image;
    quant01.innerHTML = productLine[16].quantity01;
    quant02.innerHTML = productLine[16].quantity02;
    price01.innerHTML = productLine[16].price01;
    price02.innerHTML = productLine[16].price02;
    
    available = productLine[16].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===67 Stone===
function display67Stone() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[17].name + "</strong>";
    modalImage.src = productLine[17].image;
    quant01.innerHTML = productLine[17].quantity01;
    quant02.innerHTML = productLine[17].quantity02;
    price01.innerHTML = productLine[17].price01;
    price02.innerHTML = productLine[17].price02;
    
    available = productLine[17].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

//===TOP SOIL===
//===Top Soil===
function displayTopSoil() {
    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[18].name + "</strong>";
    modalImage.src = productLine[18].image;
    quant01.innerHTML = productLine[18].quantity01;
    quant02.innerHTML = productLine[18].quantity02;
    price01.innerHTML = productLine[18].price01;
    price02.innerHTML = productLine[18].price02;
    
    available = productLine[18].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
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
document.getElementById("001-button").addEventListener("click", displayPineBarkNuggets);
document.getElementById("002-button").addEventListener("click", displayPineBarkMiniNuggets);
document.getElementById("003-button").addEventListener("click", displayPineBarkMulch);
document.getElementById("004-button").addEventListener("click", displayPineBarkSoilCond);
document.getElementById("005-button").addEventListener("click", displayNurseryMulch);
document.getElementById("006-button").addEventListener("click", displayNaturalCypressBlend);
document.getElementById("007-button").addEventListener("click", displayBrownCypressBlend);
document.getElementById("008-button").addEventListener("click", displayRedCypressBlend);
document.getElementById("009-button").addEventListener("click", displayBlackCypressBlend);
document.getElementById("010-button").addEventListener("click", displayRussetRed);
document.getElementById("011-button").addEventListener("click", displayBrownMulch);
document.getElementById("012-button").addEventListener("click", displayBlackMulch);
document.getElementById("013-button").addEventListener("click", displayHardwoodMulch);
document.getElementById("014-button").addEventListener("click", displayCedarMulch);
document.getElementById("015-button").addEventListener("click", displayConcreteSand);
document.getElementById("016-button").addEventListener("click", displayMortarSand);
document.getElementById("017-button").addEventListener("click", displayPeaGravel);
document.getElementById("018-button").addEventListener("click", display67Stone);
document.getElementById("019-button").addEventListener("click", displayTopSoil);

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