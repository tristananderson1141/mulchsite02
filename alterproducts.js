// Retrieve JSON file data

//Production URL
let requestURL = 'https://lawnlife.biz/products.json';

//Testing URL
//let requestURL = 'http://localhost/mulchsite02/products.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    const productsText = request.response;
    const products = JSON.parse(productsText);

    populateProductLine(products);
}

//populates global variable productLine with the json objects
const productLine = {};
var size = 0
function populateProductLine(obj) {
    var i;
    for (i = 0; i < obj.length; i++) {
        productLine[i] = obj[i];
        size += 1;
    }
}


function queryProduct() {
    var i;
    var itemNo = document.getElementById("listProduct").value;

    for (i = 0; i < size; i++) {
        if (itemNo == productLine[i].id) {
            
            document.getElementById("product-name").innerHTML = productLine[i].name;
            document.getElementById("id-num").value = productLine[i].id;
            document.getElementById("quantity-01").value = productLine[i].quantity01;
            document.getElementById("quantity-02").value = productLine[i].quantity02;
            document.getElementById("price-01").value = productLine[i].price01;
            document.getElementById("price-02").value = productLine[i].price02;
            document.getElementById("in-stock").value = productLine[i].stock;
            
            break;
        }
    }
}

//alert user product id field can not be altered
document.getElementById("id-num").addEventListener("click", () => {
    alert("Product ID can not be altered by user.")
});

