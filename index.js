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
  console.log(timeObject);
  return `
    <div class="subject-details">
      <div class="details-container">
        <div class="details-header">
          <span>${timeObject.title}</span>
          <img src="./images/icon-ellipsis.svg" alt="Icon Ellipsis" />
        </div>
        <div class="time">
          <span>${timeObject.timeframes.daily.current}hrs</span>
        </div>
        <div class="previous-time">
          <span>Last Week - ${timeObject.timeframes.daily.previous}hrs</span>
        </div>
      </div>
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