let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let resultP = document.getElementById("result");

function checkPalindrome() {
    if (textInput.value == "") {
        window.alert("Please input a value");
    } else {
        let checkedText = textInput.value.toString().toLowerCase().replace(/[^A-Z0-9]/ig, "");
        let a = [], b = [];
        for (let i = 0 ; i < checkedText.length ; i++) {
            a.push(checkedText[i]);
            b.push(checkedText[checkedText.length-(i+1)]);
        }
        if (a.toString() === b.toString()) {
            resultP.style.display = "block"; 
            resultP.innerText = `"${textInput.value}" is a palindrome`;
        } else {
            resultP.style.display = "block"; 
            resultP.innerText = `"${textInput.value}" is not a palindrome`;
        }
    }
};