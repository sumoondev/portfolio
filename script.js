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

const sectionBtns = document.querySelectorAll('.btns');
sectionBtns.forEach((page_btn,idx) => {
    page_btn.addEventListener('click', () => {
        const sectionPages = document.querySelectorAll('.page');

        sectionBtns.forEach(page_btn => {
            page_btn.classList.remove('active');
        });
        page_btn.classList.add('active');

        sectionPages.forEach(pages => {
            pages.classList.remove('active');
        });
        sectionPages[idx].classList.add('active');
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});