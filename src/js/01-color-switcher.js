
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let intervalId = null;
const intervalTimer = 1000;

btnStartEl.addEventListener('click', onStartChangeBody);
btnStopEl.addEventListener('click', onStopChangeBody);

function onStartChangeBody() {
    btnStartEl.setAttribute('disabled', 'true');
    intervalId = setInterval(setBody, intervalTimer);
};

function onStopChangeBody() {
    btnStartEl.removeAttribute('disabled');
    clearInterval(intervalId);
    intervalId = null;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setBody() {
    bodyEl.style.backgroundColor = getRandomHexColor();
};