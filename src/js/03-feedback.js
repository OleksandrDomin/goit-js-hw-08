
import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');
const FORM_KEY = "feedback-form-state";
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

userForm.addEventListener('input', throttle(onImput, 500));
userForm.addEventListener('submit', onSubmit);

function onImput(evt)
{
  const { email, message } = evt.currentTarget.elements;
    localStorage.setItem(FORM_KEY, JSON.stringify(
        {
        email: email.value,
        message: message.value
        }
    ))
};
   
try {
const localStorageData = localStorage.getItem("feedback-form-state");
const parseData = JSON.parse(localStorageData); 
    if (parseData.length === 0) {
        input.value = "";
        textarea.value = "";
    }

input.value = parseData.email;
textarea.value = parseData.message;
    
} catch (error) {
console.log(error.name);
console.log(error.message);
}

function onSubmit(evt)
{
    evt.preventDefault();

    const { email, message } = evt.currentTarget.elements;
    if (!(email.value.length && message.value.length))
    {
       alert("Все поля формы должны быть заполнены!");
        return;
        }
        const data = {
        email: email.value,
        message: message.value
    };
    console.log(data);
    userForm.reset();
    localStorage.removeItem(FORM_KEY);
};