const durationButtons = document.querySelectorAll('.duration');
const timeSubjects = document.querySelectorAll('.time-subject');

let timeDataArray;

durationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    if(button.getAttribute('data-activity') === 'daily') {
      console.log('DAILY');
    } else if(button.getAttribute('data-activity') === 'weekly') {
      console.log('WEEKLY');
    } else if(button.getAttribute('data-activity') === 'monthly') {
      console.log('MONTHLY');
    }

    durationButtons.forEach(button => {
      button.style.opacity = '0.5';
    });
    
    button.style.opacity = '1';
  });
});

const fetchTimeData = async () => {
  const response = await fetch('data.json');
  const timeData = await response.json();
  timeDataArray = timeData;
  parseTimeData(timeDataArray);
}

const parseTimeData = (data) => {
  data.forEach(timeCategory => {
    // console.log(timeCategory);
  });
}

const createDataMarkup = () => {
  return `
    <div class="subject-details">
      <h1>WORK</h1>
      <h1>WORK</h1>
      <h1>WORK</h1>
    </div>
  `;
};

const displayMessageMarkup = () => {
  timeSubjects.forEach(subject => {
    subject.innerHTML = createDataMarkup();
  });
}

fetchTimeData();
displayMessageMarkup();