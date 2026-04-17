const openBtn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
const mainContent = document.getElementById('main-content');

openBtn.addEventListener('click', () => {
    // 1. Shrink and Fade the Envelope
    envelope.style.opacity = '0';
    setTimeout(() => {
        envelope.style.display = 'none';
        mainContent.classList.remove('hidden');
        triggerAnimations();
    }, 1500);
});

function triggerAnimations() {
    // 2. Animate Bride & Groom Images
    setTimeout(() => {
        document.getElementById('brideImg').classList.add('animate__fadeInLeft');
    }, 500);

    setTimeout(() => {
        document.getElementById('groomImg').classList.add('animate__fadeInRight');
    }, 1500);

    // 3. Make the Characters "Walk" together when user scrolls
    window.onscroll = function() {
        let pos = window.scrollY;
        if (pos > 400) {
            document.querySelector('.animation-box').classList.add('walk-in');
        }
    };
}
