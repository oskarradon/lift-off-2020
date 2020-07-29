function twoDigits(n){
  if(n < 10)
    return '0' + n; // Add leading zero
  return n;
}

function updateTime(){
  var today = new Date();
  var hr = twoDigits(today.getHours());
  var min = twoDigits(today.getMinutes());
  var sec = twoDigits(today.getSeconds());
  var ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curMonth+" "+curDay+" "+curYear;

  document.getElementById("clock").innerHTML = date + "<br>" + hr + ":" + min + ":" + sec + " " + ap;
}
setInterval(updateTime, 500);
