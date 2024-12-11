// declarations
const inputNumber = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let outputArr = [];

// handle non valid input
function isInputValid(i) {
    if (isNaN(i.value) || i.value == "") {
        output.innerText = "Please enter a valid number";
        return false;
    } else if (i.value < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return false;
    } else if (i.value > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return false;
    } else {
        return true;
    }
}

// functions to convert numbers
// cut number into units, tens, hundreds and thousands
function cutNumber(n) {
    isInputValid(inputNumber);
    let cutN = n.toString().split("");
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
function convertN(n, c, s) {
    if (n < 5 * c) {
        if ((5 * c) % n === c && (10 * c) % n === c * 2) {
        outputArr.unshift(`${s.symbol}` + `${s.symbolFive}`);
        } else {
        outputArr.unshift(`${s.symbol.repeat(n/c)}`);
        }
    } else if (n > 5 * c) {
        if ((10 * c) % n === c) {
        outputArr.unshift(`${s.symbol}` + `${s.nextS}`);
        } else {
        let newN = (n % (5*c)) / c;
        outputArr.unshift(`${s.symbolFive}` + `${s.symbol.repeat(newN)}`);
        }
    } else {
        outputArr.unshift(`${s.symbolFive}`);
    }
}

// call the right symbols to use depending on units, tens etc. 
function useRightSymbols(n, c) {
    let symbols = {
        symbol: "",
        symbolFive: "",
        nextS: ""
    };
    if (c === 1) {
        symbols.symbol = "I";
        symbols.symbolFive = "V";
        symbols.nextS = "X";
    } else if (c === 10) {
        symbols.symbol = "X";
        symbols.symbolFive = "L";
        symbols.nextS = "C";
    } else if (c === 100) {
        symbols.symbol = "C";
        symbols.symbolFive = "D";
        symbols.nextS = "M";
    } else {
        symbols.symbol = "M";
    }
    convertN(n, c, symbols);
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


