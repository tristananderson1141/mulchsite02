/*
* firewood-display.js
* Checks the month of year and if Nov - Feb inclusive:
*   alter the home page heading to display Firewood Sale
*/

const dt = new Date();

const firewoodDisplay = document.getElementById("firewood");
const noFirewoodFormatColumn = document.getElementById("no-firewood");

curMonth = dt.getMonth() + 1;

// Firewood Sale Season
if (curMonth >= 11 || curMonth <= 2) {
    firewoodDisplay.classList.remove("is-hidden");
    noFirewoodFormatColumn.classList.add("is-hidden");
}