const container = document.querySelector('.container-centered');

// create header
container.prepend(createHeader());

// create footer
container.append(createFooter());

const form = document.querySelector('.order-form')
const btnSubmit = document.querySelector('.btn_1');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const deliveryDate = document.getElementById('delivery-date');
const street = document.getElementById('street');
const house = document.getElementById('house');
const flat = document.getElementById('flat');

let isValid = false;

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

// validation for the first name

firstName.addEventListener("blur", () => {

    if (firstName.value.length < 4 || !firstName.value.match(/^[a-zA-Z]+$/)) {
        firstName.classList.add("error-input");
        errorMsg(firstName);
    }
});

firstName.addEventListener("focus", () => { deleteErrorMsg(firstName); });

// validation for the last name
lastName.addEventListener("blur", () => {

    if (lastName.value.length < 5 || !lastName.value.match(/^[a-zA-Z]+$/)) {
        lastName.classList.add("error-input");
        errorMsg(lastName);
    }
});

lastName.addEventListener("focus", () => deleteErrorMsg(lastName));

// validation for the date
deliveryDate.addEventListener("blur", () => {

    let tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (new Date(deliveryDate.value) < tomorrow) {
        deliveryDate.classList.add("error-input");
        errorMsg(deliveryDate);
    }
});

deliveryDate.addEventListener("focus", () => deleteErrorMsg(deliveryDate));

// validation for the street

street.addEventListener("blur", () => {

    if (street.value.length < 5) {
        street.classList.add("error-input");
        errorMsg(street);
    }
});

street.addEventListener("focus", () => deleteErrorMsg(street));

//validation for the house number

house.addEventListener("blur", () => {

    if (!house.value.match(/^[1-9]\d*$/g)) {
        house.classList.add("error-input");
        errorMsg(house);
    }
});

house.addEventListener("focus", () => deleteErrorMsg(house));

// validation for the flat number

flat.addEventListener("blur", () => {

    if (!flat.value.match(/^\d(?:-?\d)*$/)) {
        flat.classList.add("error-input");
        errorMsg(flat);
    }
});

flat.addEventListener("focus", () => deleteErrorMsg(flat));

// validation for the checkboxes

const checkBoxGroup = document.querySelectorAll('.checkbox_option');
const limit = 2;
for (let i = 0; i < checkBoxGroup.length; i++) {
    const input = checkBoxGroup[i].querySelector('input');
    input.addEventListener('click', (e) => {
        let checkedCount = 0;
        for (let i = 0; i < checkBoxGroup.length; i++) {
            checkedCount += (checkBoxGroup[i].querySelector('input').checked) ? 1 : 0;
        }
        if (checkedCount > limit) {
            errorMsg(checkBoxGroup[0]);

            e.target.checked = false;
        }
    })
}

//validation for form

const errors = document.querySelectorAll('.error-msg');
const inputs = document.querySelectorAll('.input-group>input');
console.log(inputs);

const checkForm = () => {
    let errorCounter = 0;

    inputs.forEach((input) => {

        if (input.value === "" || input.classList.contains("error-input")) {
            errorCounter += 1;
        }

    })
    if (errorCounter == 0) {
        isValid = true;
        btnSubmit.disabled = false;
    } else {
        isValid = false;
        btnSubmit.disabled = true;
    }

}

form.addEventListener("keyup", checkForm);
inputs.forEach((input) => input.addEventListener('blur', checkForm));

btnSubmit.addEventListener('click', () => { })

