// document.getElementByClassName

const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color='red';
items[3].textContent="Hello";

const listItems = document.querySelector('ul').getElementsByClassName("collection-item");
console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color="blue";
lis[3].style.background="yellow";
lis[2].textContent = "Hello";

// Convert HTML Collection in to Array
lis = Array.from(lis);
lis.reverse();
lis.forEach(li => {
 console.log(li.className)
});

console.log(lis);

// We can also pass index
lis = Array.from(lis);
lis.reverse();
lis.forEach((li, index) => {
 console.log(li.className)
 li.textContent = `${index} : Hello`;
});

console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');
items.forEach((item, index) => {
    item.textContent = `${index} : Hello`;
})

// Change the color of multiple elements

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li, index) => {
    li.style.background="blue";
})

liEven.forEach((li, index) => {
    li.style.background="green";
})

// using for loop

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background="#ccc";
}

console.log(items);
