document.getElementById('patrika-container').addEventListener('click', function() {
    // Hide the envelope and show the content
    this.classList.add('opened');
    
    setTimeout(() => {
        this.style.display = 'none';
        const content = document.getElementById('main-content');
        content.classList.remove('hidden');
        
        // Trigger the "Getting Married" slide animation
        setTimeout(() => {
            document.querySelector('.couple-reveal').classList.add('animate-together');
        }, 500);
    }, 1000);
});