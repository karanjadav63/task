const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
    
    // Button text change karne ke liye
    if (overlay.classList.contains('active')) {
        menuBtn.innerText = "x";
    } else {
        menuBtn.innerText = "manu";
    }
});