// Функција за отворање на модалот
function openModal() {
    document.getElementById('accommodationModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Спречува скролање на страната во позадина
}

// Затворање на модал
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('accommodationModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Функција за менување на главната слика во галеријата
function changeImg(src) {
    document.getElementById('current-img').src = src;
}

// Затворање ако се кликне надвор од прозорецот
window.onclick = function(event) {
    let modal = document.getElementById('accommodationModal');
    if (event.target == modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}








const grid = document.querySelector('.categories .grid');
const dots = document.querySelectorAll('.categories .dot');

function updateDots() {
  const scrollLeft = grid.scrollLeft;
  const cardWidth = grid.querySelector('.card').offsetWidth + 15; // gap

  const index = Math.round(scrollLeft / cardWidth);

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

grid.addEventListener('scroll', () => {
  updateDots();
});

























document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.categories .grid');
    const cards = Array.from(document.querySelectorAll('.categories .card'));
    const dots = document.querySelectorAll('.categories .dot');

    if (grid && cards.length > 0) {
        // 1. Клонирање за Loop
        const firstClone = cards[0].cloneNode(true);
        const lastClone = cards[cards.length - 1].cloneNode(true);

        grid.appendChild(firstClone);
        grid.insertBefore(lastClone, cards[0]);

        // 2. Постави почетна позиција на оригиналната прва картичка
        const cardWidth = cards[0].offsetWidth + 20; // Ширина + gap
        grid.scrollLeft = cardWidth;

        // 3. Логика за бесконечно скролање и точки
        grid.addEventListener('scroll', () => {
            const scrollPos = grid.scrollLeft;
            const totalWidth = grid.scrollWidth - grid.offsetWidth;

            // Infinite Loop логика
            if (scrollPos <= 0) {
                grid.scrollLeft = grid.scrollWidth - (2 * grid.offsetWidth);
            } else if (scrollPos >= totalWidth) {
                grid.scrollLeft = cardWidth;
            }

            // Ажурирање на Dots (врз основа на позиција)
            const activeIndex = Math.round((grid.scrollLeft - cardWidth) / cardWidth);
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === (activeIndex % cards.length));
            });
        });
    }
});