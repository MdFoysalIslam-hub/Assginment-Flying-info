

// First Class 
let btnPlus = document.getElementById('plus-btn');
let btnMinus = document.getElementById('minus-btn')
let inputFirstClass = document.querySelector('input-1')

btnPlus.document.addEventListener('click', () => {
    inputFirstClass.value = parseInt(inputFirstClass.value) +1;
});

btnMinus.addEventListener('click', () => {
    inputFirstClass.value = parseInt(inputFirstClass.value) - 1;
});


// Economy Class
let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus')
let inputEconomy = document.querySelector('input-2')

btnPlus.document.addEventListener('click', () => {
    inputEconomy.value = parseInt(inputEconomy.value) +1;
});

btnMinus.addEventListener('click', () => {
    inputEconomy.value = parseInt(inputEconomy.value) - 1;
});

// Subtotal 

let total = inputFirstClass + inputEconomy;

// dear sir. I am sorry i try it many way but i did not do that. but i am learning. please save me 