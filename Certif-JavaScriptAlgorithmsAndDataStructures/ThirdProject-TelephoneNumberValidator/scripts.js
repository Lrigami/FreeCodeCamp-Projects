const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

check.addEventListener("click", () => {
    if (input.value !== "") {
        let regex = /^([1][\s|-]?)?(\d{3}[\s|-]?|\(\d{3}\)[\s|-]?)(\d{3}[\s|-]?)(\d{4})$/;
        if (regex.test(input.value)) {
          result.innerText = `Valid US number: ${input.value}`;
        } else {
          result.innerText = `Invalid US number: ${input.value}`;
        }
    } else {
        alert("Please provide a phone number");
    }
})

clear.addEventListener("click", () => result.innerText = "");
