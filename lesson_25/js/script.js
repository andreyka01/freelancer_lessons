
const formInput = document.querySelector('.form__body')
const formSearch = document.querySelector('.form__search');
const formMaxLimit = formSearch.getAttribute('maxlength');
const formCounter =  document.querySelector('.form__limit span');
formCounter.innerHTML = formMaxLimit; 

function showInput(event) {
   if(event.target.closest('.search')) {
      formInput.classList.toggle("_active");
      document.querySelector('.form').style.columnGap = 20 + 'px';
   }
   if (!event.target.closest('.form')) {
      formInput.classList.remove("_active");
   }
}

document.addEventListener('click', showInput);
document.addEventListener('keyup', (e) => {
   if(e.code === "Escape") {
      formInput.classList.remove("_active");
   }
});

function setCounter() {
   const formCounterResult = formMaxLimit - formSearch.value.length;
   formCounter.innerHTML = formCounterResult; 
}

formSearch.addEventListener('keyup', setCounter);
formSearch.addEventListener('keydown', (e) => {
   if(e.repeat) setCounter();
});
