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





function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const burger = document.querySelector(".burger");

  menu.classList.toggle("active");
  burger.classList.toggle("active"); 
}