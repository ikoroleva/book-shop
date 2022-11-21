const container = document.querySelector('.container-centered');

//create header
container.prepend(createHeader());

//create footer
container.append(createFooter());

const btnSubmit = document.querySelector('.btn_1');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const deliveryDate = document.getElementById('delivery-date');
const street = document.getElementById('street');
const house = document.getElementById('house');
const flat = document.getElementById('flat');

function errorMsg(element) {
    const inputGroup = element.parentElement;
    const span = inputGroup.querySelector("span");
    span.style = "display: block";
}

function deleteErrorMsg(element) {
    const inputGroup = element.parentElement;
    const span = inputGroup.querySelector("span");
    if (element.classList.contains("error-input")) {
        element.classList.remove("error-input");
        span.style = "display: none";
    }
}

//validation for the first name

firstName.addEventListener("blur", () => {

    if (firstName.value.length < 4 || firstName.value.includes(" ")) {
        firstName.classList.add("error-input");
        errorMsg(firstName);
    }
});

firstName.addEventListener("focus", () => { deleteErrorMsg(firstName); });

//validation for the last name
lastName.addEventListener("blur", () => {

    if (lastName.value.length < 5 || lastName.value.includes(" ")) {
        lastName.classList.add("error-input");
        errorMsg(lastName);
    }
});

lastName.addEventListener("focus", () => deleteErrorMsg(lastName));




