const countdownDate = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // Set the countdown date to 20 days from now

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('daysBox').innerHTML = `${days}<br>days`;
    document.getElementById('hoursBox').innerHTML = `${hours}<br>hours`;
    document.getElementById('minutesBox').innerHTML = `${minutes}<br>minutes`;
    document.getElementById('secondsBox').innerHTML = `${seconds}<br>seconds`;

    // Example: Change background color based on time remaining
    const secondsBox = document.getElementById('secondsBox');
    if (seconds % 2 === 0) {
        secondsBox.style.backgroundColor = '#6f1d9d'; // Red background for even seconds
    } else {
        secondsBox.style.backgroundColor = '#fb7e00'; // Blue background for odd seconds
    }
};

//setting event day
const timeElement = document.getElementById('time');
const ourEventDay = ['Venue: The landmark event', 'Date: January 1, 2024', 'Time: 16:00'];
let currentIndex = 0;
let currentEventIndex = 0;

function writeAndClearEvent() {
    const currentEvent = ourEventDay[currentIndex];
    if (currentEventIndex < currentEvent.length) {
        timeElement.textContent += currentEvent.charAt(currentEventIndex);
        currentEventIndex++;
        setTimeout(writeAndClearEvent, 200); // Adjust the delay between letters
    } else {
        // Clear the name after a delay
        setTimeout(() => {
            timeElement.textContent = '';
            currentEventIndex = 0;
            // Move to the next name
            currentIndex++;
            if (currentIndex === ourEventDay.length) {
                currentIndex = 0;
            }
            // Repeat the process
            setTimeout(writeAndClearEvent, 0); // Adjust the delay before the next name
        }, 100); // Adjust the delay before clearing the name
    }
};

writeAndClearEvent();

//here is the questions button
const minusElements = document.getElementsByClassName('minus');
const angleDown = document.getElementsByClassName('angleDown');

// Option 1: Iterate through the collection
for (let i = 0; i < minusElements.length; i++) {
    minusElements[i].style.display = 'none';
}
for (let i = 0; i < angleDown.length; i++) {
    angleDown[i].style.display = 'none';
}

var angleRight = document.getElementById('angleRight');
var add = document.getElementById('add');
var angleRight1 = document.getElementById('angleRight1');
var add1 = document.getElementById('add1');
var angleRight2 = document.getElementById('angleRight2');
var add2 = document.getElementById('add2');
var angleRight3 = document.getElementById('angleRight3');
var add3 = document.getElementById('add3');
var angleRight4 = document.getElementById('angleRight4');
var add4 = document.getElementById('add4');
var text = document.getElementById('text');
    text.style.display = "none";
var text1 = document.getElementById('text1');
    text1.style.display = "none";
var text2 = document.getElementById('text2');
    text2.style.display = "none";
var text3 = document.getElementById('text3');
    text3.style.display = "none";
var text4 = document.getElementById('text4');
    text4.style.display = "none";

function ques() {
    if (text.style.display === "none") {
        text.style.display = "block";
        angleRight.style.display = "none";
        add.style.display = "none";
// Option 2: Access a specific element by index
if (minusElements.length > 0) {
    const firstMinusElement = minusElements[0];
    firstMinusElement.style.display = 'block';
        }
        if (angleDown.length > 0) {
            const newAngleDown = angleDown[0];
            newAngleDown.style.display = "block";
        }
    } else {
        text.style.display = "none";
    angleRight.style.display = "block";
    add.style.display = "block";
    // Option 2: Access a specific element by index
    if (minusElements.length > 0) {
        const firstMinusElement = minusElements[0];
        firstMinusElement.style.display = 'none';
    }
    if (angleDown.length > 0) {
        const newAngleDown = angleDown[0];
        newAngleDown.style.display = "none";
    }
};
};
function ques1() {
    if (text1.style.display === "none") {
        text1.style.display = "block";
        angleRight1.style.display = "none";
        add1.style.display = "none";
// Option 2: Access a specific element by index
if (minusElements.length > 1) {
    const firstMinusElement = minusElements[1];
    firstMinusElement.style.display = 'block';
        }
        if (angleDown.length > 1) {
            const newAngleDown = angleDown[1];
            newAngleDown.style.display = "block";
        }
    } else {
        text1.style.display = "none";
    angleRight1.style.display = "block";
    add1.style.display = "block";
    // Option 2: Access a specific element by index
    if (minusElements.length > 1) {
        const firstMinusElement = minusElements[1];
        firstMinusElement.style.display = 'none';
    }
    if (angleDown.length > 1) {
        const newAngleDown = angleDown[1];
        newAngleDown.style.display = "none";
    }
};
};
function ques2() {
    if (text2.style.display === "none") {
        text2.style.display = "block";
        angleRight2.style.display = "none";
        add2.style.display = "none";
// Option 2: Access a specific element by index
if (minusElements.length > 2) {
    const firstMinusElement = minusElements[2];
    firstMinusElement.style.display = 'block';
        }
        if (angleDown.length > 2) {
            const newAngleDown = angleDown[2];
            newAngleDown.style.display = "block";
        }
    } else {
        text2.style.display = "none";
    angleRight2.style.display = "block";
    add2.style.display = "block";
    // Option 2: Access a specific element by index
    if (minusElements.length > 2) {
        const firstMinusElement = minusElements[2];
        firstMinusElement.style.display = 'none';
    }
    if (angleDown.length > 2) {
        const newAngleDown = angleDown[2];
        newAngleDown.style.display = "none";
    }
};
};
function ques3() {
    if (text3.style.display === "none") {
        text3.style.display = "block";
        angleRight3.style.display = "none";
        add3.style.display = "none";
// Option 2: Access a specific element by index
if (minusElements.length > 3) {
    const firstMinusElement = minusElements[3];
    firstMinusElement.style.display = 'block';
        }
        if (angleDown.length > 3) {
            const newAngleDown = angleDown[3];
            newAngleDown.style.display = "block";
        }
    } else {
        text3.style.display = "none";
    angleRight3.style.display = "block";
    add3.style.display = "block";
    // Option 2: Access a specific element by index
    if (minusElements.length > 3) {
        const firstMinusElement = minusElements[3];
        firstMinusElement.style.display = 'none';
    }
    if (angleDown.length > 3) {
        const newAngleDown = angleDown[3];
        newAngleDown.style.display = "none";
    }
};
};
function ques4() {
    if (text4.style.display === "none") {
        text4.style.display = "block";
        angleRight4.style.display = "none";
        add4.style.display = "none";
// Option 2: Access a specific element by index
if (minusElements.length > 4) {
    const firstMinusElement = minusElements[4];
    firstMinusElement.style.display = 'block';
        }
        if (angleDown.length > 4) {
            const newAngleDown = angleDown[4];
            newAngleDown.style.display = "block";
        }
    } else {
        text4.style.display = "none";
    angleRight4.style.display = "block";
    add4.style.display = "block";
    // Option 2: Access a specific element by index
    if (minusElements.length > 4) {
        const firstMinusElement = minusElements[4];
        firstMinusElement.style.display = 'none';
    }
    if (angleDown.length > 4) {
        const newAngleDown = angleDown[4];
        newAngleDown.style.display = "none";
    }
};
};