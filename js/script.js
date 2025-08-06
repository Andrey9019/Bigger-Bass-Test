document.addEventListener("DOMContentLoaded", () => {
  const loaderBg = document.getElementById("loaderBg");
  const backdrop = document.getElementById("backdrop");
  const startPopup = document.getElementById("startPopup");
  const finalPopup = document.getElementById("finalPopup");
  const activateBtn = document.getElementById("activateBtn");
  const spinButton = document.getElementById("spinButton");
  const installBtn = document.getElementById("installBtn");
  const slotContainer = document.getElementById("slotContainer");
  const fsContainer = document.getElementById("fsContainer");
  const attemptsCount = document.getElementById("attempts-count");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const allSymbols = Array.from(
    { length: 16 },
    (_, i) => `/Bigger-Bass-Test/public/assets/slots/symbol${i + 1}.png`
  );
  console.log(allSymbols);

  const spinsData = [
    [
      "symbol3",
      "symbol8",
      "symbol2",
      "symbol16",
      "symbol15",
      "symbol9",
      "symbol12",
      "symbol2",
      "symbol13",
    ],
    [
      "symbol11",
      "symbol4",
      "symbol7",
      "symbol13",
      "symbol13",
      "symbol15",
      "symbol4",
      "symbol16",
      "symbol10",
    ],
    [
      "symbol1",
      "symbol2",
      "symbol8",
      "symbol5",
      "symbol5",
      "symbol14",
      "symbol7",
      "symbol13",
      "symbol9",
    ],
    [
      "symbol14",
      "symbol15",
      "symbol10",
      "symbol6",
      "symbol6",
      "symbol6",
      "symbol15",
      "symbol5",
      "symbol12",
    ],
  ].map((arr) =>
    arr.map((fn) => `/Bigger-Bass-Test/public/assets/slots/${fn}.png`)
  );

  const totalSpins = spinsData.length - 1;
  let remainingSpins, currentStep, timerInterval;

  const show = (el) => el.classList.remove("hidden");
  const hide = (el) => el.classList.add("hidden");

  function renderSlots(step) {
    slotContainer.innerHTML = "";
    for (let row = 0; row < 3; row++) {
      const div = document.createElement("div");
      div.className = "slot-row";
      spinsData[step].slice(row * 3, row * 3 + 3).forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "slot-image";
        div.appendChild(img);
      });
      slotContainer.appendChild(div);
    }
  }

  window.addEventListener("load", () => {
    show(loaderBg);
    setTimeout(() => {
      hide(loaderBg);
      show(backdrop);
      renderSlots(0);
      show(startPopup);
    }, 1500);
  });

  activateBtn.addEventListener("click", () => {
    hide(startPopup);
    hide(backdrop);

    remainingSpins = totalSpins;
    currentStep = 1;
    attemptsCount.textContent = remainingSpins;

    show(fsContainer);
    show(spinButton);
  });

  function pickRandomSymbol() {
    const idx = Math.floor(Math.random() * allSymbols.length);
    return allSymbols[idx];
  }

  function spinAnimation(finalCombo, duration = 1000, frameRate = 80) {
    return new Promise((resolve) => {
      const cells = document.querySelectorAll(".slot-row img");

      document
        .querySelectorAll(".slot-row")
        .forEach((r) => r.classList.add("spinning"));

      const intervalId = setInterval(() => {
        cells.forEach((img) => {
          img.src = pickRandomSymbol();
        });
      }, frameRate);

      setTimeout(() => {
        clearInterval(intervalId);
        document
          .querySelectorAll(".slot-row")
          .forEach((r) => r.classList.remove("spinning"));

        finalCombo.forEach((src, i) => {
          if (cells[i]) cells[i].src = src;
        });

        resolve();
      }, duration);
    });
  }

  function blinkWinningRow() {
    const rows = document.querySelectorAll(".slot-row");
    if (rows.length > 1) {
      rows[1].classList.add("blink");
    }
  }

  spinButton.addEventListener("click", async () => {
    if (remainingSpins === 0) return;

    spinButton.disabled = true;
    spinButton.classList.add("disabled");

    const combo = spinsData[currentStep];
    await spinAnimation(combo, 1000, 60);

    remainingSpins--;
    attemptsCount.textContent = remainingSpins;
    currentStep++;

    if (remainingSpins > 0) {
      spinButton.disabled = false;
      spinButton.classList.remove("disabled");
    } else {
      blinkWinningRow();

      setTimeout(() => {
        show(backdrop);
        show(finalPopup);
        startTimer(15 * 60);

        const rows = document.querySelectorAll(".slot-row");
        if (rows[1]) rows[1].classList.remove("blink");
      }, 2000);
    }
  });

  function startTimer(duration) {
    clearInterval(timerInterval);
    let rem = duration;
    timerInterval = setInterval(() => {
      if (rem <= 0) return clearInterval(timerInterval);
      rem--;
      const m = String(Math.floor(rem / 60)).padStart(2, "0");
      const s = String(rem % 60).padStart(2, "0");
      minutesEl.textContent = m;
      secondsEl.textContent = s;
    }, 1000);
  }

  installBtn.addEventListener("click", () => {});
});
