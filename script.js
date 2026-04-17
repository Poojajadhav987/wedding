document.addEventListener("DOMContentLoaded", function() {
    const seal = document.getElementById('sealButton');
    const gatefold = document.getElementById('gatefold');

    seal.addEventListener('click', function() {
        // Hide seal
        gatefold.classList.add('opening-sequence');
        
        // Open doors
        setTimeout(() => {
            gatefold.classList.add('opened');
            
            // Start emoji walk after doors open
            setTimeout(() => {
                document.querySelector('.animation-container').classList.add('walk');
            }, 1000);
        }, 300);
    });
});
