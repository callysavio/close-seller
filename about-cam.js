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