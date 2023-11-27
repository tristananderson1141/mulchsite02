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
function populateTableData(objs) {

    let curNameTag;
    let curPriceTag;
    let len = Object.keys(objs).length;
    let i;
    /*
    * This loop populates the preview table on home page
    * Parameter: productLine - json provided list of products
    *   - Builds the html id's for name and price of each product
    *   - gets each element by these id's and
    *   - sets the name and price from the parameter passed array
    */
    for (i = len; i > 0; i--) {

        if (i > 9) {
            curNameTag = "0" + i;
            curPriceTag = "0" + i + "PRC";
        }
        else {
            curNameTag = "00" + i;
            curPriceTag = "00" + i + "PRC";
        }

        document.getElementById(curNameTag).innerHTML = objs[i - 1].name;
        
        //check if price01 is populated else use price02
        if (objs[i - 1].price01 == "$ ---") {
            document.getElementById(curPriceTag).innerHTML = objs[i - 1].price02;
        }
        else {
            document.getElementById(curPriceTag).innerHTML = objs[i - 1].price01;
        }
    }
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

// =============== TRIAL ===============
/*
* Single function to populate the modal
* Parameter: ID based on the button clicked
*   to display product modal
* Searches productLine based on id value
*/
function displaySelectProduct(val) {

    defaultModal.classList.add("is-active");
    modalHeader.innerHTML = "<strong>" + productLine[val].name + "</strong>";
    modalImage.src = productLine[val].image;
    quant01.innerHTML = productLine[val].quantity01;
    quant02.innerHTML = productLine[val].quantity02;
    price01.innerHTML = productLine[val].price01;
    price02.innerHTML = productLine[val].price02;
    
    available = productLine[val].stock;
    if (available == "true") {
        availability.innerHTML = "<strong>Availability: In Stock</strong>";
        availableColor.style = "background-color:lightgreen";
    }
    else {
        availability.innerHTML = "<strong>Availability: Out of Stock</strong>";
        availableColor.style = "background-color:rgb(255,75,90)";
    }
}

// =============== END TRIAL ===============



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
document.getElementById("001-button").addEventListener("click", function() {
    displaySelectProduct(0);
});
document.getElementById("002-button").addEventListener("click", function() {
    displaySelectProduct(1);
});
document.getElementById("003-button").addEventListener("click", function() {
    displaySelectProduct(2);
});
document.getElementById("004-button").addEventListener("click", function() {
    displaySelectProduct(3);
});
document.getElementById("005-button").addEventListener("click", function() {
    displaySelectProduct(4);
});
document.getElementById("006-button").addEventListener("click", function() {
    displaySelectProduct(5);
});
document.getElementById("007-button").addEventListener("click", function() {
    displaySelectProduct(6);
});
document.getElementById("008-button").addEventListener("click", function() {
    displaySelectProduct(7);
});
document.getElementById("009-button").addEventListener("click", function() {
    displaySelectProduct(8);
});
document.getElementById("010-button").addEventListener("click", function() {
    displaySelectProduct(9);
});
document.getElementById("011-button").addEventListener("click", function() {
    displaySelectProduct(10);
});
document.getElementById("012-button").addEventListener("click", function() {
    displaySelectProduct(11);
});
document.getElementById("013-button").addEventListener("click", function() {
    displaySelectProduct(12);
});
document.getElementById("014-button").addEventListener("click", function() {
    displaySelectProduct(13);
});
document.getElementById("015-button").addEventListener("click", function() {
    displaySelectProduct(14);
});
document.getElementById("016-button").addEventListener("click", function() {
    displaySelectProduct(15);
});
document.getElementById("017-button").addEventListener("click", function() {
    displaySelectProduct(16);
});
document.getElementById("018-button").addEventListener("click", function() {
    displaySelectProduct(17);
});
document.getElementById("019-button").addEventListener("click", function() {
    displaySelectProduct(18);
});
document.getElementById("020-button").addEventListener("click", function() {
    displaySelectProduct(19);
});
document.getElementById("021-button").addEventListener("click", function() {
    displaySelectProduct(20);
});


//event listeners for elements that can close the modal
document.getElementById("default-close").addEventListener("click", hideModal);
document.getElementById("modal-bg").addEventListener("click", hideModal);
