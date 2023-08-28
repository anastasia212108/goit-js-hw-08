import throttle from 'lodash.throttle';
console.log("hello")
const form = document.querySelector(".feedback-form")
// const email = document.querySelector(".email-js")
// const message = document.querySelector(".message-js")
const btn = document.querySelector("button")
const localKey3 = "feedback-form-state"


// updateForm()

form.addEventListener("input", throttle(onFormInput, 500))
// form.addEventListener("submit", onFormSubmit)

function onFormInput(evt) {
    const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
}
    // formData[evt.target.name] = evt.target.value;
   localStorage.setItem(localKey3, JSON.stringify(formData));
};

form.addEventListener("submit", removeText)
function removeText(evt) {
    console.log(JSON.parse(localStorage.getItem(localKey3)))
    evt.preventDefault();
    localStorage.removeItem(localKey3)
    if (localStorage.getItem(localKey3)) { form.value = localStorage.getItem(localKey3) } else {
        form.elements.email.value = "";  form.elements.message.value = "" }
    // form.reset()
    // localStorage.setItem(localKey3, null)

}


document.addEventListener("DOMContentLoaded", backText);
function backText(evt) {
    if (localStorage.getItem(localKey3)) {
        form.elements.email.value = JSON.parse(localStorage.getItem(localKey3)).email || "";
        form.elements.message.value = JSON.parse(localStorage.getItem(localKey3)).message || "";

    } 

    
}
console.log("we")

    // if (setText)
// }
// function onFormSubmit(evt) {
//     evt.preventDefault();
// }

// email.addEventListener("input", saveTextEmail)
// message.addEventListener("input", saveTextMessage)
// function saveTextEmail(evt) {
//     localStorage.setItem("email",JSON.stringify(evt.currentTarget.value))
//     console.log("Email:", JSON.parse(localStorage.getItem("email")))
// }
// function saveTextMessage(evt) {
//     localStorage.setItem("message" , JSON.stringify(evt.currentTarget.value))
// console.log("Message:", JSON.parse(localStorage.getItem("message")))
// }

// btn.addEventListener("click", removeText);

//_.throttle(() => {},500)