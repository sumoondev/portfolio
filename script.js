(function() {
    const words = ["Coder", "Designer", "Gamer"];
    const typingElement = document.querySelector('.typing-text');
    const typingSpeed = 150;  // ms per character
    const eraseSpeed = 60;    // ms per character
    const delayBetweenWords = 1800;  // delay after word typed in ms

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayedText = '';

        if (isDeleting) {
            charIndex--;
            displayedText = currentWord.substring(0, charIndex);
            typingElement.textContent = displayedText;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, eraseSpeed);
            }
        } else {
            charIndex++;
            displayedText = currentWord.substring(0, charIndex);
            typingElement.textContent = displayedText;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenWords);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    // Start typing effect
    type();
})();
