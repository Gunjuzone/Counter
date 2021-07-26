//Declare an empty variable that take our counter
let counter = 0;
// Select the buttons and the initial counter value
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// Loop through the buttons and add event listener to the forEach function. Use the event object (e) to check which of the button you are clicking

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget.classList); to check the classList
    if (e.currentTarget.classList.contains('decrease')) {
      counter--;
    } else if (e.currentTarget.classList.contains('increase')) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      value.style.color = 'red';
    }
    if (counter > 0) {
      value.style.color = 'green';
    }
    if (counter === 0) {
      value.style.color = 'black';
    }
    value.textContent = counter;
  });
});
