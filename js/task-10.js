function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);

function createBoxes() {

  for (let i = 0; i < inputRef.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i*10}px`;
    box.style.height = `${30 + i*10}px`;
    box.classList.add("box")
    box.style.backgroundColor = getRandomHexColor();
      console.log(box);
      boxesRef.append(box)}
}
btnDestroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesRef.innerHTML = "";
};
btnDestroyRef.addEventListener('click', resetInput )
function resetInput(event) {
inputRef.value = "";
console.log(event.target);
}



// inputRef.addEventListener ('click')
// function resetInput() {

// }

// const n = 2;
// btnCreateRef.addEventListener('click', () => {

//   for (let i = 1; i <= n; i += 1) {
//   const box = document.createElement("div");
//       box.style.width = "30px";
//       box.style.height = "30px";
//       box.style.backgroundColor = getRandomHexColor();
//       console.log(box);
//       boxesRef.append(box)}
// });


// function createBoxes(n) 


//   const a = function onInput () {
//     console.log(Number(inputRef.value))
//     return Number(inputRef.value);
    
//   }
//   inputRef.addEventListener('input', onInput);
//   console.log(a);
//   const amount = 7;
//   btnCreateRef.addEventListener('click', (amount) => {
//     console.log("5555");
//     console.log(amount);
//     for (let i = 1; i <= amount; i += 1) {
//       console.log(amount);
//       const box = document.createElement("div");
//       box.style.width = "30px";
//       box.style.height = "30px";
//       box.style.backgroundColor = getRandomHexColor();
//       console.log(box);
//       boxesRef.append(box);
//     }
//   });
  

// // function createBoxes(amount) {
// //     console.log("5555");
// //     for (let i = 1; i <= amount; i += 1) {
// //       console.log(amount);
// //       const box = document.createElement("div");
// //       box.style.width = "30px";
// //       box.style.height = "30px";
// //       box.style.backgroundColor = getRandomHexColor();
// //       console.log(box);
// //       boxesRef.append(box);
// //     }
// //   };

//   // createBoxes(at);
// ;

