import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

const submitButton = document.querySelector('form');
submitButton.addEventListener('submit', e => {
  e.preventDefault();
  const amount = +e.target.elements['amount'].value;
  const step = +e.target.elements['step'].value;
  const delay = +e.target.elements['delay'].value;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});