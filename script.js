'use strict';

// Timer elements
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

// Modal elements
const modal = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-btn');

let hr = 0, min = 0, sec = 0;

// Timer logic
const timer = setInterval(() => {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
        m.innerHTML = min <= 9 ? `0${min}` : min;

        if (min == 60) {
            min = 0;
            hr++;
            h.innerHTML = hr <= 9 ? `0${hr}` : hr;
        }
        
        // Trigger modal after 1 minute
        if (min == 1) {
            clearInterval(timer);
            modal.style.display = 'flex';
        }
    }
    s.innerHTML = sec <= 9 ? `0${sec}` : sec;

}, 1000);

// Close modal logic
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
