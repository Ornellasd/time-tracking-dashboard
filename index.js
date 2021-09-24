const timeframeButtons = document.querySelectorAll('.timeframe');
const timeSubjects = document.querySelectorAll('.time-subject');

let timeDataArray;
let timeframeSelection;

timeframeButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    timeframeButtons.forEach(button => {
      button.style.color = 'hsl(235, 45%, 61%)';
    });
    
    button.style.color = '#fff';

    timeframeSelection = button.getAttribute('data-timeframe');
    displayMessageMarkup(timeDataArray);
  });
});

const fetchTimeData = async () => {
  const response = await fetch('data.json');
  const timeData = await response.json();
  timeDataArray = timeData;
  displayMessageMarkup(timeDataArray);
}

const createDataMarkup = (title, timeObject) => {
  let previousTimeLabel = 'Yesterday';

  if(timeframeSelection === 'daily') {
    previousTimeLabel = 'Yesterday'
  } else if(timeframeSelection === 'weekly') {
    previousTimeLabel = 'Last Week'
  } else if(timeframeSelection === 'monthly') {
    previousTimeLabel = 'Last Month'
  }

  return `
    <div class="subject-details">
      <div class="details-container">
        <div class="details-header">
          <span>${title}</span>
          <img src="./images/icon-ellipsis.svg" alt="Icon Ellipsis" />
        </div>
        <div class="details-time">
          <div class="current-time">
            <span>${timeObject.current}hrs</span>
          </div>
          <div class="previous-time">
            <span>${previousTimeLabel} - ${timeObject.previous}hrs</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

const selectedTimeframe = (timeObject) => {
  switch(timeframeSelection) {
    case 'daily':
      return timeObject.timeframes.daily;
    case 'weekly':
      return timeObject.timeframes.weekly;
    case 'monthly':
      return timeObject.timeframes.monthly;
    default:
      return timeObject.timeframes.daily;
  }
}

const displayMessageMarkup = (timeData) => {
  timeSubjects.forEach(subject => {
    timeData.forEach(timeObject => {
      if(subject.getAttribute('data-subject') === timeObject.title) {
        subject.innerHTML = createDataMarkup(timeObject.title, selectedTimeframe(timeObject));      
      }
    });
  });
}

fetchTimeData();