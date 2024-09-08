document.addEventListener("DOMContentLoaded", function () {
  // Тексты для каждого профиля
  const profilesText = {
    yana: `
        <div class="section__block" id="mainText">
             <span class="team-section__animation-text"
               ><img
                 class="team-section__divider"
                 src="./img/divider-left.png"
                 alt="diveder-left" />
               <p class="section__icon" id="typingTextFirst"></p>
               <img
                 class="team-section__divider"
                 src="./img/divider-right.png"
                 alt="divider-right"
             /></span>
             <div class="section__content-first-stroke">
               <span> Дизайн — це не про роботу, це мій </span>
             </div>
           </div>

           спосіб життя, я надихаюся кожним процесом, від ідеї до реалізації.

           <span class="section__content-highlight"
             >Як казав Генрі Мур: Мистецтво — це спосіб бачити речі
             по-іншом.</span
           >
           Не важливо, чи у вас є ідея, чи ні — мій досвід дозволяє генерувати,
           аналізувати і створювати стильні та ефективні рішення.
         </div>`,

    vlad: `
       <div class="section__block" id="mainText">
         <span class="team-section__animation-text">
           <img class="team-section__divider" src="./img/divider-left.png" alt="divider-left" />
           <p class="section__icon" id="typingTextFirst"></p>
           <img class="team-section__divider" src="./img/divider-right.png" alt="divider-right" />
         </span>
         <div class="section__content-first-stroke">
           <span>  Cтворюю вражаючі візуалізації. </span>
         </div>
         </div>
         Працюю з будь-якими завданнями, від брендингу до створення унікальних графічних концепцій.
         <span class="section__content-highlight">
           Креативність — це наша сила.
         </span>
         </div>`,

    andrii: `
       <div class="section__block id="mainText">
         <span class="team-section__animation-text">
           <img class="team-section__divider" src="./img/divider-left.png" alt="divider-left" />
           <p class="section__icon" id="typingTextFirst"></p>
           <img class="team-section__divider" src="./img/divider-right.png" alt="divider-right" />
         </span>
         <div class="section__content-first-stroke">
           <span> Багатий досвід у створенні веб-рішень. </span>
         </div>
         </div>
         Працюю над складними проектами і завжди в курсі нових технологій.
         <span class="section__content-highlight">
           Код — це мистецтво.
         </span>
         </div>`,
  };

  function updateText(profile) {
    const sectionContent = document.querySelector(".section__content");
    const profiles = document.querySelectorAll(".section__profiles-profile");

    // Обновляем текст в контентной секции
    sectionContent.innerHTML = profilesText[profile];

    // Убираем класс active со всех профилей
    profiles.forEach((profileElement) =>
      profileElement.classList.remove("section__profiles-profile--active")
    );

    // Добавляем active класс к выбранному профилю
    const selectedProfile = document.getElementById(profile + "-profile");
    selectedProfile.classList.add("section__profiles-profile--active");
  }

  // Назначаем обработчики кликов для каждого профиля
  document.getElementById("yana").addEventListener("click", function () {
    updateText("yana");
  });

  document.getElementById("vlad").addEventListener("click", function () {
    updateText("vlad");
  });

  document.getElementById("andrii").addEventListener("click", function () {
    updateText("andrii");
  });
});
