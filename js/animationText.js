function typeText(elementId, text, speed = 100) {
  const typingElement = document.getElementById(elementId);

  if (!typingElement) return; // Перевірка чи вже існує елемент

  let index = 0;
  typingElement.textContent = ""; // Очищається перед друком

  function typeNextChar() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, speed);
    }
  }

  typeNextChar();
}

typeText("typingTextFirst", "Чим ми кращі?", 100);
typeText("typingTextSecond", "в цифровому просторі", 100);
