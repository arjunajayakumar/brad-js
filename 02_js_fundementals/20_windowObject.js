// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert('Hello world');

// Propmt
const input = prompt();
alert(input);

// Confirm
if (confirm('Are you sure')) {
  console.log('yes');
} else {
  console.log('no');
}

// Outer height and width
let val;
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;
console.log(val);

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;
console.log(val);

// Redirect
window.location.href = 'http://google.com';
console.log(val);

// Reload 
window.location.reload();
console.log(val);

// History Object
window.history.go(-2);
val = window.history.length;
console.log(val);

// Navigator
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);


