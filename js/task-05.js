const nameInputRef = document.querySelector('#name-input');
console.log(nameInputRef);
const nameOutputRef = document.querySelector('#name-output');
console.log(nameOutputRef);

nameInputRef.addEventListener('input',(event) => {
    if (event.currentTarget.value !== ""){
    nameOutputRef.textContent = event.currentTarget.value;
    console.log(nameOutputRef.textContent)
} else {
    nameOutputRef.textContent = 'Anonymous'
}
})