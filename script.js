function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockDisplay = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = clockDisplay;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('currentDate').textContent = currentDate;

    const liveTime = `${hours}:${minutes}`;
    document.getElementById('liveTime').textContent = liveTime;
}

function updateFinishTime() {
    const startTime = document.querySelector('.start-time').textContent;
    const durationText = document.querySelector('.duration-text').textContent;

    // Parse start time and duration
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [durationHours, durationMinutes] = durationText.match(/\d+/g).map(Number);

    // Calculate finish time
    const finishHours = (startHours + durationHours) % 24;
    const finishMinutes = (startMinutes + durationMinutes) % 60;

    // Display finish time
    const finishTime = `${finishHours.toString().padStart(2, '0')}:${finishMinutes.toString().padStart(2, '0')}`;
    document.querySelector('.finish-time').textContent = finishTime;
}

// Update finish time on duration change
document.querySelector('.duration-text').addEventListener('input', function () {
    updateFinishTime();
});

// Update finish time on start time change
document.querySelector('.start-time').addEventListener('input', function () {
    updateFinishTime();
});

setInterval(updateClock, 1000);
updateClock();

// Initial calculation for finish time
updateFinishTime();
