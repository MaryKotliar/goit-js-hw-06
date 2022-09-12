const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const textRef = document.querySelector('#text');
console.log(textRef);
// textRef.style.fontSize = `${inputRef.value}px`;
// console.log(textRef.style.fontSize);
inputRef.addEventListener('input', (event) => {
    console.log(event.target.value);
    textRef.style.fontSize = `${event.target.value}px`;
})