const count = document.querySelector('.counter');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeBy = document.querySelector('.changeBy');

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue + changeByValue;
});

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue - changeByValue;
});

