// We need a way to get the current time and have that be updated each second. 

// To do this, we are going to create a function that contains a timer to call itself again each second.

function showTime() {
    var date = new Date(); // This gets us the current date and time.
    
    var dayOfWeek = date.getDay(); // 0 - 6
    var month = date.getMonth(); // 0 - 11
    var dayOfMonth = date.getDate(); // 1 - 31
    var year = date.getFullYear(); // 1000 - 9999
    var hour = date.getHours(); // 0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var period = "AM"; // We're going to assume that we're in AM to start.

    // We need to make sure the hour is properly represented in 12 hour time, and we also need to determine whether we should display AM or PM.

    // With our hours being between 0 - 23, 0 would equal 12AM and anything 12 or above is a PM hour.
    
    switch (dayOfWeek) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    }

    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "Feburary";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    if (hour === 0) {
        period = "AM";
    } else if (hour >= 12) {
        period = "PM";
    }

    if (hour === 0) {
        hour = 12; // If hour equals 0, change it to 12.
    }

    if (hour > 12) {
        hour -= 12; // If hour is greater than 12, subtract 12 from it.
    }

    hour = (hour < 10) ? ("0" + hour) : hour; // If hour is less than 10, set hour equal to "0" to plus the value of hour.

    minute = minute < 10 ? "0" + minute : minute;

    seconds = seconds < 10 ? "0" + seconds: seconds;

    // String to store the current Date.
    var date = dayOfWeek + ",  " + month + " " + dayOfMonth + ", " + year;

    document.getElementById("dateDisplay").innerText = date;

    // String to store the current time.
    var time = hour + ":" + minute + ":" + seconds + " " + period;

    document.getElementById("clockDisplay").innerText = time;

    setTimeout(showTime, 1000); // Schedule the showTime function to be called after 100- ms (1 second).
}

showTime();