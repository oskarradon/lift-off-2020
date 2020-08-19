// clock

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



// menu button

let button = document.querySelector('#talent');
let menu = document.querySelector('#drop-down');
button.addEventListener('click', () => {
   if(  menu.style.display === "" ) {
      menu.style.display="block";
      button.setAttribute('aria-expanded', true);
      menu.hidden = false;
      document.querySelector('#caret').classList.add('rotated');
      document.querySelector('#talent').classList.add('toggled');
   } else {
      menu.style.display="";
      button.setAttribute('aria-expanded', false);
      menu.hidden = true;
      document.querySelector('#caret').classList.remove('rotated');
      document.querySelector('#talent').classList.remove('toggled');
   }
})


// resizing drop-down menu if mobile bottom nav is showing

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// show return to top button after scrolling 500 px
// from: https://css-tricks.com/styling-based-on-scroll-position/

if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y < 0) {
    document.querySelector('#return-to-top').classList.add('button-showing');
  } else {
    document.querySelector('#return-to-top').classList.remove('button-showing');
  }
});
observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}
