document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    
    // Updated alt text to match exactly
    const nycImage = heroImage.querySelector('img[alt="New York City"]');
    const ldnImage = heroImage.querySelector('img[alt="London"]');
    
    // Add debug logging
    if (!nycImage || !ldnImage) {
        console.error('Images not found:', {
            nyc: nycImage,
            ldn: ldnImage
        });
        return;
    }
    
    let isNYC = true;

    // Show NYC initially
    nycImage.classList.add('active');
    nycImage.classList.remove('hidden');
    ldnImage.classList.add('hidden');
    ldnImage.classList.remove('active');

    // Change image on click
    heroImage.addEventListener('click', (e) => {
        console.log('Image clicked', { isNYC });
        
        if (isNYC) {
            nycImage.classList.remove('active');
            nycImage.classList.add('hidden');
            ldnImage.classList.add('active');
            ldnImage.classList.remove('hidden');
        } else {
            ldnImage.classList.remove('active');
            ldnImage.classList.add('hidden');
            nycImage.classList.add('active');
            nycImage.classList.remove('hidden');
        }
        isNYC = !isNYC;
    });
}); 