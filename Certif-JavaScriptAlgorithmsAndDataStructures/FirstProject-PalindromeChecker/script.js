let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let resultParagraph = document.getElementById("result");

// Try #1 (functional code):

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


// Try #2 (less code):

// function checkPalindrome() {
//     if (textInput.value == "") {
//         window.alert("Please input a value");
//     } else {
//         let checkedText = textInput.value.toString().toLowerCase().replace(/[^A-Z0-9]/ig, "");
//         resultP.style.display = "block"; 
//         resultP.innerText = checkedText.split("").toString() === checkedText.split("").reverse().toString() ? `"${textInput.value}" is a palindrome` : `"${textInput.value}" is not a palindrome`;
//     }
// };



// Try #3 (clean code):

function hasSomethingBeenTyped() { // check is something has been typed in textInput.
    if (textInput.value == "") {
        alert("Please type something.");
        return false;
    } else {
        return true;
    }
}

function checkIfIsAPalindrom() { // check if what has been typed is a palindrome.
    resultParagraph.style.display = "block";

    let typedText = textInput.value.toString().toLowerCase().replace(/[^A-Z0-9]/ig, ""); // get what is typed without special chars in lower case.
    let textToCheck = typedText.split("").toString(); // reform the string without special chars.
    let reversedTextToCheck = typedText.split("").reverse().toString(); // reform the string without special chars in reverse.

    if (textToCheck === reversedTextToCheck) { // check if the string is equal to the reversed string.
        resultParagraph.innerText = `"${textInput.value}" is a palindrome`;
    } else {
        resultParagraph.innerText = `"${textInput.value}" is not a palindrome`;
    }
}

checkBtn.addEventListener("click", () => {
    if (hasSomethingBeenTyped()) {
        checkIfIsAPalindrom();
    }
})