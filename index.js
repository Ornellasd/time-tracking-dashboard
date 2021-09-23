const durationButtons = document.querySelectorAll('.duration');

durationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(button.getAttribute('data-activity'));

    if(button.getAttribute('data-activity') === 'daily') {
      console.log('DAILY');
    } else if(button.getAttribute('data-activity') === 'weekly') {
      console.log('WEEKLY');
    } else if(button.getAttribute('data-activity') === 'monthly') {
      console.log('MONTHLY');
    }
    // switch(button.getAttribute('data-activity')) {
    //   case 'daily':
    //     console.log('DAILY');
    //   case 'weekly':
    //     console.log('WEEKLY');
    //   case 'monthly':
    //     console.log('MONTHLY');
    //   default:
    //     return null;
    // };


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