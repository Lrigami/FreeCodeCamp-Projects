// declarations
const inputNumber = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let outputArr = [];

// handle non valid input
function isInputValid(input) {
    if (isNaN(input.value) || input.value == "") {
        output.innerText = "Please enter a valid number";
        return false;
    } else if (input.value < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    } else if (input.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    } else {
        return true;
    }
}

// functions to convert numbers
// cut number into units, tens, hundreds and thousands
function cutNumber(number) {
    isInputValid(inputNumber);
    let cutN = number.toString().split("");
    let toConvert = [];
    let count = 1;
    while(cutN.length > 0) {
        let lastN = parseInt(cutN.pop());
        lastN = lastN * count;
        useRightSymbols(lastN, count);
        toConvert.unshift(lastN);
        console.log(cutN, lastN, toConvert);  
        count *= 10;
    }
    output.innerText = outputArr.join("");
}

// convert number into roman numerals
function convertN(number, count, symbols) {
    if (number < 5 * count) {
        if ((5 * count) % number === count && (10 * count) % number === count * 2) {
        outputArr.unshift(`${symbols.symbol}` + `${symbols.symbolFive}`);
        } else {
        outputArr.unshift(`${symbols.symbol.repeat(number/count)}`);
        }
    } else if (number > 5 * count) {
        if ((10 * count) % number === count) {
        outputArr.unshift(`${symbols.symbol}` + `${symbols.nextS}`);
        } else {
        let newN = (number % (5*count)) / count;
        outputArr.unshift(`${symbols.symbolFive}` + `${symbols.symbol.repeat(newN)}`);
        }
    } else {
        outputArr.unshift(`${symbols.symbolFive}`);
    }
}

// call the right symbols to use depending on units, tens etc. 
function useRightSymbols(number, count) {
    let symbols = {
        symbol: "",
        symbolFive: "",
        nextS: ""
    };
    if (count === 1) {
        symbols.symbol = "I";
        symbols.symbolFive = "V";
        symbols.nextS = "X";
    } else if (count === 10) {
        symbols.symbol = "X";
        symbols.symbolFive = "L";
        symbols.nextS = "C";
    } else if (count === 100) {
        symbols.symbol = "C";
        symbols.symbolFive = "D";
        symbols.nextS = "M";
    } else {
        symbols.symbol = "M";
    }
    convertN(number, count, symbols);
}

// listen to call the function
convertBtn.addEventListener("click", () => {
    if(!isInputValid(inputNumber)) {
        return;
    };
    output.innerText = "";
    outputArr = [];
    cutNumber(inputNumber.value);
})


