const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerID = null;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
    startBtn.setAttribute('disabled', true);

    timerID = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
};

function onClickStopBtn() {
    startBtn.removeAttribute('disabled', true);

    clearInterval(timerID);
};