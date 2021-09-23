const timeframeButtons = document.querySelectorAll('.timeframe');
const timeSubjects = document.querySelectorAll('.time-subject');

let timeDataArray;

timeframeButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    if(button.getAttribute('data-timeframe') === 'daily') {
      console.log('DAILY');
    } else if(button.getAttribute('data-timeframe') === 'weekly') {
      console.log('WEEKLY');
    } else if(button.getAttribute('data-timeframe') === 'monthly') {
      console.log('MONTHLY');
    }

    timeframeButtons.forEach(button => {
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
  displayMessageMarkup(timeDataArray);
}

const parseTimeData = (data) => {
  data.forEach(timeCategory => {
    // console.log(timeCategory);
  });
}

const createDataMarkup = (subject, timeObject) => {
  return `
    <div class="subject-details">
      <h1>${timeObject.title}</h1>
      <h1>WORK</h1>
      <h1>WORK</h1>
    </div>
  `;
};

const displayMessageMarkup = (timeData) => {

  console.log(timeData);
  timeSubjects.forEach(subject => {
    timeData.forEach(timeObject => {
      if(subject.getAttribute('data-subject') === timeObject.title) {
        subject.innerHTML = createDataMarkup(subject, timeObject);
      }
    });
  });
}

fetchTimeData();