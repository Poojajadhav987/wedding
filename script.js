const sealBtn = document.getElementById('sealButton');
const gatefold = document.getElementById('gatefold');
const mainContent = document.getElementById('main-content');

sealBtn.addEventListener('click', () => {
    // 1. Shrink Seal
    gatefold.classList.add('opening-sequence');
    
    // 2. Open Doors
    setTimeout(() => {
        gatefold.classList.add('opened');
        
        // 3. Reveal Internal Content
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            
            // 4. Trigger Photo Slide & Character Walk
            setTimeout(() => {
                document.querySelector('.couple-reveal').classList.add('animate-together');
                document.querySelector('.animation-box').classList.add('walk-in');
            }, 500);
        }, 800);
    }, 300);
});
