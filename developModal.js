// Purpose: Provide modals for product information

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
