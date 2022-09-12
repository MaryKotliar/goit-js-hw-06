const formRef = document.querySelector('.login-form')
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();
const { elements: {email, password} } = event.currentTarget;
if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    return
}

const data = {
    email: email.value,
    password: password.value, 
}
console.log(data);
event.currentTarget.reset();
};
