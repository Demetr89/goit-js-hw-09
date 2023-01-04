/**
 * 1. Сделать привязку к тегам кнопок по dataset и с помощью querySelector
 * 2. Навесить на обе кнопки по назв переменной startBtn и stopBtn addEventListener
 * --. По условия задания имеем disabled
 * 3. let timerId = null - выяснить зачем
 * 4. пишем функцию на клик Старт и клик Стоп
 *  - в Старт необходимо по заданию добавить состояние кнопки (disabled) чтобы ее нельзя было кликнуть 1000 мс
 */

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', handleStartClick);
stopBtn.addEventListener('click', handleStopClick);

let timerId = null;

function handleStartClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function handleStopClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
