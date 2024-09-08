// Функция для печати текста по символам
function typeTextFirst() {
  const firstText = "Чим ми кращі?"; // Здесь можно изменить текст, если нужно

  const typingTextElementFirst = document.getElementById("typingTextFirst");

  let indexFirst = 0;
  typingTextElementFirst.textContent = ""; // Очищаем текст перед началом печати

  function typeNextChar() {
    if (indexFirst < firstText.length) {
      typingTextElementFirst.textContent += firstText.charAt(indexFirst);
      indexFirst++;
      setTimeout(typeNextChar, 100);
    }
  }

  typeNextChar();
}
typeTextFirst();
// Экспортируем функцию, если используем модульную систему (например, ES6 Modules)
// export { typeTextFirst };
