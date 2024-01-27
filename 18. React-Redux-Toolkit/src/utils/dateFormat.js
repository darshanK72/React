function formatDate(milliseconds) {
    // Create a new Date object
    var date = new Date(milliseconds);

    // Extract the various date components
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero based
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Pad single digit day, month, hours and minutes with leading zeros
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return the formatted date string
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}

export default formatDate;