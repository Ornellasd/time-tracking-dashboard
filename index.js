const durationButtons = document.querySelectorAll('.duration');

durationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    durationButtons.forEach(button => {
      button.style.opacity = '0.5';
    });
    
    button.style.opacity = '1';
  });
});