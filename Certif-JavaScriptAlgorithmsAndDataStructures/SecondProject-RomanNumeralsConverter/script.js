// declarations
const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// handle non valid input
function isInputValid(i) {
    if (i.value < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (i.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    } else if (!i.value.ok) {
        output.innerText = "Please enter a valid number";
        return;
    }
}

// convert to roman numerals
function convertNumber(i) {
    let remainder = Math.floor(i, 1) % i;
    console.log(remainder)
}

console.log(convertNumber(9));


