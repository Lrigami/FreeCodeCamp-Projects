let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let resultP = document.getElementById("result");

// function checkPalindrome() {
//     if (textInput.value == "") {
//         window.alert("Please input a value");
//     } else {
//         let checkedText = textInput.value.toString().toLowerCase().replace(/[^A-Z0-9]/ig, "");
//         let a = [], b = [];
//         for (let i = 0 ; i < checkedText.length ; i++) {
//             a.push(checkedText[i]);
//             b.push(checkedText[checkedText.length-(i+1)]);
//         }
//         resultP.style.display = "block"; 
//         if (a.toString() === b.toString()) {
//             resultP.innerText = `"${textInput.value}" is a palindrome`;
//         } else {
//             resultP.innerText = `"${textInput.value}" is not a palindrome`;
//         }
//     }
// };

function checkPalindrome() {
    if (textInput.value == "") {
        window.alert("Please input a value");
    } else {
        let checkedText = textInput.value.toString().toLowerCase().replace(/[^a-zA-Z]/ig, "");
        resultP.style.display = "block"; 
        resultP.innerText = checkedText.split("").toString() === checkedText.split("").reverse().toString() ? `"${textInput.value}" is a palindrome` : `"${textInput.value}" is not a palindrome`;
    }
};