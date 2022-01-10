// Displays the holiday hours based on current date
/**
 * NOTE: may need minor adjustments to when each holiday
 *       hour set is displayed
 *       GOAL: display holiday hours a week in advance,
 *             hide holiday hours two days after event end
 */
const dt = new Date();

const holidayName = document.getElementById("holiday-name");
const holidayColumns = document.getElementById("holiday-columns");
const holidayBreak = document.getElementById("holiday-break");
/** 
const monday = document.getElementById("mon");
const tuesday = document.getElementById("tue");
const wednesday = document.getElementById("wed");
const thursday = document.getElementById("thu");
const friday = document.getElementById("fri");
const saturday = document.getElementById("sat");
*/
var weekday = new Array(7);
weekday[0] = "sun";
weekday[1] = "mon";
weekday[2] = "tue";
weekday[3] = "wed";
weekday[4] = "thu";
weekday[5] = "fri";
weekday[6] = "sat";

curMonth = dt.getMonth() + 1;

if ((curMonth == 1 && dt.getDate() < 3) || (curMonth == 12 && dt.getDate() > 26)) {

    holidayName.classList.remove("is-hidden");
    holidayName.innerHTML = "New Year's Hours";

    holidayColumns.classList.remove("is-hidden");
    holidayBreak.classList.remove("is-hidden");
    
    if (curMonth == 1) {
        var holidate = new Date(dt.getFullYear(), 0, 1);
    }
    else if (curMonth == 12) {
        var holidate = new Date(dt.getFullYear() + 1, 0, 1);
    }

    var dayOfWeek = holidate.getDay();

    document.getElementById(weekday[dayOfWeek]).innerHTML = "Closed";
    document.getElementById(weekday[dayOfWeek]).style.fontWeight = "bold";
    document.getElementById(weekday[dayOfWeek]).style.color = "red";
    
}
else if (curMonth == 7 && dt.getDate() <= 5) {

    holidayName.classList.remove("is-hidden");
    holidayName.innerHTML = "4th of July Hours";

    holidayColumns.classList.remove("is-hidden");
    holidayBreak.classList.remove("is-hidden");

    var holidate = new Date(dt.getFullYear(), 6, 4);
    var dayOfWeek = holidate.getDay();

    document.getElementById(weekday[dayOfWeek]).innerHTML = "Closed";
    document.getElementById(weekday[dayOfWeek]).style.fontWeight = "bold";
    document.getElementById(weekday[dayOfWeek]).style.color = "red";
}
else if (curMonth == 11 && dt.getDate() > 20) {

    holidayName.classList.remove("is-hidden");
    holidayName.innerHTML = "Thanksgiving Hours";

    holidayColumns.classList.remove("is-hidden");
    holidayBreak.classList.remove("is-hidden");

    thursday.innerHTML = "Closed";
    thursday.style.fontWeight = "bold";
    thursday.style.color = "red";
}
else if (curMonth == 12 && dt.getDate() > 15 && dt.getDate() <= 26) {

    holidayName.classList.remove("is-hidden");
    holidayName.innerHTML = "Christmas Hours";

    holidayColumns.classList.remove("is-hidden");
    holidayBreak.classList.remove("is-hidden");
    
    var holidate = new Date(dt.getFullYear(), 11, 25);
    var dayOfWeek = holidate.getDay();

    document.getElementById(weekday[dayOfWeek]).innerHTML = "Closed";
    document.getElementById(weekday[dayOfWeek]).style.fontWeight = "bold";
    document.getElementById(weekday[dayOfWeek]).style.color = "red";
}

