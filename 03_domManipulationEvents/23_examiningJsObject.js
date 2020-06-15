let val;
// Document
val =document;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Forms
val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].method;
val = document.forms[0].action;

// links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

// images
val = document.images;

// scripts
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArry = Array.from(scripts);

scriptsArry.forEach(script => {
    console.log(script.getAttribute('src'))
    
});

console.log(val);