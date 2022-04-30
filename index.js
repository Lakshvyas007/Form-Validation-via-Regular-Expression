console.log("Gooood");

const uname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const City = document.getElementById("City");
const Submit = document.getElementById("sbtBtn");
let validName = false;
let validCity = false;
let validEmail = false;
let validPhone = false;

// console.log(uname, email, phone);

uname.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = uname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid Name");
        uname.classList.remove("is-invalid")
        validName = true
    } else {
        console.log("Invalid name");
        uname.classList.add("is-invalid")
        validName = false;
    }
})
email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here 
    let regex = /^([_\-\.0-9a-zA-Z]+)\@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Email is valid");
        email.classList.remove("is-invalid")
        validEmail = true
    } else {
        console.log("Email is invalid");
        email.classList.add("is-invalid")
        validEmail = false
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here 
    let regex = /^(([0-9]){10})$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid phone number");
        phone.classList.remove("is-invalid")
        validPhone = true
    } else {
        console.log("Invalid Phone Number");
        phone.classList.add("is-invalid")
        validPhone = false
    }
})

City.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here 
    let regex = /^([A-Z])([A-Za-z]){3,20}$/;
    let str = City.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Valid City name");
        City.classList.remove("is-invalid")
        validCity = true;
    } else {
        console.log("Invalid City name");
        City.classList.add("is-invalid")
        validCity = false;
    }
})


Submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked on submit button");
    if (validEmail && validName && validPhone && validCity) {
        console.log("Everything is valid in this form");
        let success = document.getElementById("success");
        let failure = document.getElementById("danger");
        success.classList.add("show")
        failure.classList.remove("show")
    } else {
        console.log("Something is invalid in this form");
        let success = document.getElementById("success");
        let failure = document.getElementById("danger");
        success.classList.remove("show")
        failure.classList.add("show")
    }


})

