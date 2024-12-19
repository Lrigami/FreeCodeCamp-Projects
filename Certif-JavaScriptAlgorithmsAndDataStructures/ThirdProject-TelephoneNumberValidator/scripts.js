const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const isInputValid = input => {
    let val = input.value;
    return val === "" ? false : true;
}

check.addEventListener("click", () => {
    if (isInputValid) {
        let regex = /^([1][\s|-]?)?(\d{3}[\s|-]?|\(\d{3}\)[\s|-]?)(\d{3}[\s|-]?)(\d{4})/;
        if (regex.test(input.value)) {
          result.innerText = `Valid US number: ${input.value}`;
        } else {
          result.innerText = `Invalid US number: ${input.value}`;
        }
    } else {
        result.innerText = "Please provide a phone number";
    }
})

clear.addEventListener("click", results.innerText = "");
