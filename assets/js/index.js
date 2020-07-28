import dateFormat from 'modules/dateformat.js';

var now = new Date();
var formattedTime = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

console.log(formattedTime);
