const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerID = null;

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', true);

    timerID = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
};

function onClickStopBtn() {
    refs.startBtn.removeAttribute('disabled', true);
    refs.stopBtn.setAttribute('disabled', true);

    clearInterval(timerID);
};