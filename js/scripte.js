document.addEventListener("DOMContentLoaded", () => {
  const spinButton = document.getElementById("spinButton");
  const attemptsCount = document.getElementById("attempts-count");
  const popup = document.getElementById("finalPopup");

  let currentSpinIndex = 0; // Індекс поточного масиву
  let attempts = 3; // Початкове значення спроб
  attemptsCount.textContent = attempts;

  // Функція для відображення слотів у форматі 3x3
  const displaySlots = (spinIndex) => {
    slotContainer.innerHTML = ""; // Очищення контейнера

    const currentSpin = spins[spinIndex];

    for (let i = 0; i < currentSpin.length; i += 3) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("slot-row"); // Клас для стилізації ряду

      // Додаємо три зображення в ряд
      currentSpin.slice(i, i + 3).forEach((imageSrc) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Slot Symbol";
        img.classList.add("slot-image"); // Клас для стилізації зображення
        rowDiv.appendChild(img);
      });

      slotContainer.appendChild(rowDiv);
    }
  };

  // Відображення першого масиву при завантаженні сторінки
  displaySlots(currentSpinIndex);

  // Обробник натискання кнопки Spin
  spinButton.addEventListener("click", () => {
    currentSpinIndex = (currentSpinIndex + 1) % spins.length; // Перехід до наступного масиву
    displaySlots(currentSpinIndex);
  });

  // Обробник натискання кнопки
  spinButton.addEventListener("click", () => {
    if (attempts > 0) {
      attempts--; // Зменшуємо кількість спроб
      attemptsCount.textContent = attempts; // Оновлюємо відображення спроб

      if (attempts === 0) {
        // Коли спроби закінчуються
        spinButton.disabled = true; // Вимикаємо кнопку
        spinButton.style.opacity = "0.5"; // Робимо кнопку напівпрозорою
        spinButton.style.cursor = "not-allowed"; // Змінюємо курсор

        // Через 3 секунди показуємо попап
        setTimeout(() => {
          popup.classList.remove("hidden"); // Показую попап
          startTimer(60 * 15); // Запускаємо таймер на 2 хвилини
        }, 1500);
      }
    }
  });
});

const startTimer = (durationInSeconds) => {
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  let remaining = durationInSeconds;

  const intervalId = setInterval(() => {
    if (remaining <= 0) {
      clearInterval(intervalId);
      return;
    }

    remaining--;

    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    minutesEl.textContent = String(mins).padStart(2, "0");
    secondsEl.textContent = String(secs).padStart(2, "0");
  }, 1000);
};
//
const spins = [
  [
    "/public/assets/slots/symbol3.png",
    "/public/assets/slots/symbol8.png",
    "/public/assets/slots/symbol2.png",
    "/public/assets/slots/symbol16.png",
    "/public/assets/slots/symbol15.png",
    "/public/assets/slots/symbol9.png",
    "/public/assets/slots/symbol12.png",
    "/public/assets/slots/symbol2.png",
    "/public/assets/slots/symbol13.png",
  ],
  [
    "/public/assets/slots/symbol11.png",
    "/public/assets/slots/symbol4.png",
    "/public/assets/slots/symbol7.png",
    "/public/assets/slots/symbol13.png",
    "/public/assets/slots/symbol13.png",
    "/public/assets/slots/symbol15.png",
    "/public/assets/slots/symbol4.png",
    "/public/assets/slots/symbol16.png",
    "/public/assets/slots/symbol10.png",
  ],
  [
    "/public/assets/slots/symbol1.png",
    "/public/assets/slots/symbol2.png",
    "/public/assets/slots/symbol8.png",
    "/public/assets/slots/symbol5.png",
    "/public/assets/slots/symbol5.png",
    "/public/assets/slots/symbol14.png",
    "/public/assets/slots/symbol7.png",
    "/public/assets/slots/symbol13.png",
    "/public/assets/slots/symbol9.png",
  ],
  [
    "/public/assets/slots/symbol14.png",
    "/public/assets/slots/symbol15.png",
    "/public/assets/slots/symbol10.png",
    "/public/assets/slots/symbol6.png",
    "/public/assets/slots/symbol6.png",
    "/public/assets/slots/symbol6.png",
    "/public/assets/slots/symbol15.png",
    "/public/assets/slots/symbol5.png",
    "/public/assets/slots/symbol12.png",
  ],
];
