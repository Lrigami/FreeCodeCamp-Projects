// Animation for text typing
const texts = ["Project", "Question", "Suggestion"];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("text");

function type() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
    textElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenTexts);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, erasingSpeed);
    }
  }
}

type();