import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('.form');


formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  showAllResults(
    Number(stepEl.value),
    Number(delayEl.value),
    Number(amountEl.value)
  );
};

function showAllResults(delay, step, amount) {
  for (let i = 1, d = delay; i <= amount; i += 1, d += step) {
    showPermiseResult(i, d);
  }
};

function showPermiseResult(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
};