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

const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;

  // Load saved theme
if (localStorage.getItem('theme') === 'light') {
    root.classList.add('light-mode');
    toggleButton.textContent = '🌙'; // show moon (switch to dark)
} 
else {
        toggleButton.textContent = '☀️'; // show sun (switch to light)
}


toggleButton.addEventListener('click', () => {
    root.classList.toggle('light-mode');
    const isLight = root.classList.contains('light-mode');
    toggleButton.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// const sectionBtns = document.querySelectorAll('.btns');
// sectionBtns.forEach((page_btn,idx) => {
//     page_btn.addEventListener('click', () => {
//         const sectionPages = document.querySelectorAll('.page');
//         sectionBtns.forEach(page_btn => {
//             page_btn.classList.remove('active');
//         });
//         page_btn.classList.add('active');

//         sectionPages.forEach(pages => {
//             pages.classList.remove('active');
//         });
//         sectionPages[idx].classList.add('active');
//     });
// });

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

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    if (index == 1) {
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    if (index == 0) {
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});