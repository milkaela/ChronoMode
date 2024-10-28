alert("Pentru a incepe numaratoarea apasa ok!")

let timer;
let milliseconds = 0;
let seconds = 0;
let isRunning = false;

let countdownTimer;
let countdownSeconds = 60;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        toggleTimer();
    }
});

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        incrementTimer();
    }, 10);
    isRunning = true; 
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function restartTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatMilliseconds(milliseconds);
    startTimer();
}

function incrementTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time.toString();
    }
}


function formatMilliseconds(time) {
    if (time < 10) {
        return '00' + time;
    } else if (time < 100) {
        return '0' + time;
    } else {
        return time;
    }
}

function toggleMode() {
    let body = document.body;
    let nightIcon = document.querySelector('.night');
    let dayIcon = document.querySelector('.day');
    let modeText = document.getElementById('mode-text');
    
    if (body.classList.contains('night-mode')) {
        body.classList.remove('night-mode');
        body.classList.add('light-mode');
        body.style.backgroundColor = '#f0f0f0';
        nightIcon.style.display = 'block';
        dayIcon.style.display = 'none';
        modeText.textContent = "Light Mode";
    } else {
        body.classList.add('night-mode');
        body.classList.remove('light-mode');
        body.style.backgroundColor = '#333';
        nightIcon.style.display = 'none';
        dayIcon.style.display = 'block';
        modeText.textContent = "Night Mode";
    }
}

function toggleTimer() {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

// function startCountdown() {
//     countdownTimer = setInterval(function() {
//         countdownSeconds--;
//         document.getElementById('countdown-seconds').textContent = countdownSeconds;
//         if (countdownSeconds <= 0) {
//             clearInterval(countdownTimer);
//         }
//     }, 1000);
// }
