const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');

function onBtnDecr () {
    counterValue.textContent = Number(counterValue.textContent) - 1
}

function onBtnIncr () {
    counterValue.textContent = Number(counterValue.textContent) + 1
}

btnIncrRef.addEventListener("click", onBtnIncr);
btnDecrRef.addEventListener("click", onBtnDecr);


