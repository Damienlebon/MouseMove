const small = document.getElementById('small');
const medium = document.getElementById('medium');
const large = document.getElementById('large');

window.addEventListener('mousemove', (e) => {
    small.style.left = e.x + 'px';
    small.style.top = e.y + 'px';
    medium.style.left = e.x +75 + 'px';
    medium.style.top = e.y + 'px';
    large.style.left = e.x - 100  + 'px'; 
    large.style.top = e.y + 'px'; 
});

