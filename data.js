const typingTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is fun but challenging at the same time.",
    "Typing speed depends on practice and accuracy.",
    "JavaScript is a powerful language for web development.",
    "Consistency and dedication lead to success.",
    "Coding is like solving a puzzle, piece by piece.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "A journey of a thousand miles begins with a single step.",
    "Innovation distinguishes between a leader and a follower."
];

// Function to get a random text
function getRandomText() {
    return typingTexts[Math.floor(Math.random() * typingTexts.length)];
}

// Export the function for use in script.js
if (typeof module !== "undefined") {
    module.exports = { getRandomText };
}
