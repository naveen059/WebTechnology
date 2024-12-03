// dom.js: DOM Manipulation Techniques

// 1. Selecting Elements
const singleElement = document.getElementById('uniqueId');
const multipleElements = document.getElementsByClassName('className');
const querySelectElements = document.querySelectorAll('.selector');

// 2. Creating Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Dynamically Created Element';
newDiv.classList.add('dynamic-class');

// 3. Modifying Elements
singleElement.innerHTML = 'Updated Content';
singleElement.style.color = 'blue';
singleElement.setAttribute('data-custom', 'value');

// 4. Event Listeners
singleElement.addEventListener('click', (event) => {
    console.log('Element clicked', event.target);
});

// 5. Event Delegation
document.addEventListener('click', (event) => {
    if (event.target.matches('.child-element')) {
        console.log('Child element clicked');
    }
});

// 6. Traversing DOM
const parentElement = singleElement.parentElement;
const childElements = singleElement.children;
const nextSibling = singleElement.nextElementSibling;

// 7. Adding and Removing Elements
const parentNode = document.querySelector('.parent');
parentNode.appendChild(newDiv);
parentNode.removeChild(singleElement);

// 8. Class Manipulation
singleElement.classList.add('new-class');
singleElement.classList.remove('old-class');
singleElement.classList.toggle('active');

// 9. Dataset Manipulation
singleElement.dataset.customAttribute = 'custom value';
console.log(singleElement.dataset.customAttribute);