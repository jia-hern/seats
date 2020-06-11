var availableSeats = 10;
var originalPrice = 50;
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// TODO: read from cookie if anyone selected the value
var currentTicket = 0;
if(getCookie('availableTicket') == "") {
  availableSeats -= availableSeats;
  setCookie('availableTicket', availableSeats, 1);
} else {
  currentTicket = getCookie('availableTicket');
  document.getElementById("totalTicket").value = currentTicket;
}
function buyTicket() {
  // validate if ticket still available
  if(checkAvailableTicket()) {
    // TODO: process buying ticket
  } else {
    document.getElementById("error").value = 'No more tickets';
    const button = document.querySelector('buy');
    button.disabled = true;
  }
}
// TODO
function basicPriceCalculation(price) {
}
// TODO
function classPriceCalculation(price) {
}
function checkAvailableTicket() {
  if(availableSeats > 0) {
    return true;
  } else {
    return false;
  }
}