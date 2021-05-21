// Following 3 functions are used to navigate different HTML pages for the mulchsite
function openCalcPage() {
    window.open("Mulch-Area-Calculator.html", "_self");
}

function openHomePage() {
    window.open("index.html","_self");
}

function openAboutUs() {
    window.open("About-Us.html", "_self");
}


// Following 3 functions are used to auto scroll to different categories of products
function mulchLocater() {

    location.href = "#";
    location.href = "index.html#mulchHeader";        
}

function soilLocater() {
    
    location.href = "#";
    location.href = "index.html#soilHeader";
}

function sandLocater() {
    
    location.href = "#";
    location.href = "index.html#sandHeader";
}

// Function is used to calculate quantity of mulch required for a given area
function calcArea() {

    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var depth = document.getElementById("depth").value;
    depth = depth / 12;

    var area = length * width * depth;

    area = area / 27;
    area = area.toFixed(2);

    var result = area + " cubic yards"

    document.getElementById("result").textContent = result;
}

// Event listener for navigation options
document.getElementById("mulchCalc").addEventListener("click", openCalcPage);
document.getElementById("homePage").addEventListener("click", openHomePage);
document.getElementById("aboutUs").addEventListener("click", openAboutUs);

document.getElementById("locateMulch").addEventListener("click", mulchLocater);
document.getElementById("locateSoil").addEventListener("click", soilLocater);
document.getElementById("locateSand").addEventListener("click", sandLocater);

// Allows burger to display header items when active
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elemetns
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar-burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(e1 => {
            e1.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = e1.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                e1.classList.toggle("is-active");
                $target.classList.toggle('is-active');
            })
        })
    }
});