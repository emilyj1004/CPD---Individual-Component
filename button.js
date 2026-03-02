// Sort functionality for race cards
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[type="button"]');
    const container = document.body; // Parent container of all race divs

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sortType = button.textContent.trim();
            sortCards(sortType);
        });
    });
});

function sortCards(sortType) {
    // Get all race card divs
    const cards = Array.from(document.querySelectorAll('[data-place]'));
    
    if (sortType === 'Recent') {
        cards.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    } else if (sortType === 'Place') {
        cards.sort((a, b) => parseInt(a.dataset.place) - parseInt(b.dataset.place));
    } else if (sortType === 'Time') {
        cards.sort((a, b) => parseFloat(a.dataset.timeSeconds) - parseFloat(b.dataset.timeSeconds));
    }

    // Re-insert cards in sorted order
    cards.forEach(card => {
        document.body.appendChild(card);
    });
}
