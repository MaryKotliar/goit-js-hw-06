const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    const {value, dataset} = event.target;
    value.length === Number(dataset.length) ? changeClass ('valid', 'invalid', event.target) : changeClass ('invalid', 'valid', event.target)
    // if (value.length === Number(dataset.length)) {
    //     changeClass ('valid', 'invalid', event.target)
    // }
    // else {
    //     changeClass ('invalid', 'valid', event.target)
    // }
console.log(value.length);
console.log(Number(dataset.length));
})


function changeClass(add, remove, elem) {
    elem.classList.add(add);
    elem.classList.remove(remove);
}