document.addEventListener("DOMContentLoaded", () => {
    const textDisplay = document.getElementById("text");
    const inputArea = document.getElementById("input-area");
    const timerDisplay = document.getElementById("timer");
    const wpmDisplay = document.getElementById("wpm");
    const accuracyDisplay = document.getElementById("accuracy");
    const restartButton = document.getElementById("restart");
    const themeToggle = document.getElementById("theme-toggle");
    const leaderboard = document.getElementById("leaderboard");
    const sampleText = "The quick brown fox jumps over the lazy dog.";
    let timer = 60;
    let interval = null;
    let typedCharacters = 0;
    let correctCharacters = 0;
    let started = false;

    textDisplay.innerText = sampleText;
    
    inputArea.addEventListener("input", () => {
        if (!started) {
            started = true;
            interval = setInterval(updateTimer, 1000);
        }
        const typedText = inputArea.value;
        typedCharacters = typedText.length;
        correctCharacters = [...typedText].filter((char, i) => char === sampleText[i]).length;
        updateStats();
    });

    function updateStats() {
        const wpm = Math.round((typedCharacters / 5) / ((60 - timer) / 60));
        const accuracy = Math.round((correctCharacters / typedCharacters) * 100) || 100;
        wpmDisplay.innerText = wpm;
        accuracyDisplay.innerText = accuracy + "%";
    }

    function updateTimer() {
        if (timer > 0) {
            timer--;
            timerDisplay.innerText = timer;
        } else {
            clearInterval(interval);
            inputArea.disabled = true;
        }
    }

    restartButton.addEventListener("click", () => {
        clearInterval(interval);
        timer = 60;
        started = false;
        inputArea.disabled = false;
        inputArea.value = "";
        timerDisplay.innerText = timer;
        wpmDisplay.innerText = "0";
        accuracyDisplay.innerText = "100%";
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
