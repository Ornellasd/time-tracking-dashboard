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

const fetchTimeData = async () => {
  const response = await fetch('data.json');
  const timeData = await response.json();
  parseTimeData(timeData);
}

const parseTimeData = (data) => {
  data.forEach(timeCategory => {
    console.log(timeCategory);
  });
}

fetchTimeData();