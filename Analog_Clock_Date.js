function showDate() {
    var date = new Date(),
        days = date.getDay(),
        dates = date.getDate(),
        month = date.getMonth();

    if (days == 0) {
        days = "Sun";
    } else if (days == 1) {
        days = "Mon";
    } else if (days == 2) {
        days = "Tue";
    } else if (days == 3) {
        days = "Wed";
    } else if (days == 4) {
        days = "Thu";
    } else if (days == 5) {
        days = "Fri";
    } else if (days == 6) {
        days = "Sat";
    }

    if (month == 0) {
        month = "Jan";
    } else if (month == 1) {
        month = "Feb";
    } else if (month == 2) {
        month = "Mar";
    } else if (month == 3) {
        month = "Apr";
    } else if (month == 4) {
        month = "May";
    } else if (month == 5) {
        month = "Jun";
    } else if (month == 6) {
        month = "Jul";
    } else if (month == 7) {
        month = "Aug";
    } else if (month == 8) {
        month = "Sep";
    } else if (month == 9) {
        month = "Oct";
    } else if (month == 10) {
        month = "Nov";
    } else if (month == 11) {
        month = "Dec";
    }

    document.querySelectorAll('.date')[0].innerHTML = days + " , " + dates + " " + month;
}

setInterval(showDate, 1000)