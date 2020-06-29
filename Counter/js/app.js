const plusBtn = document.querySelector('#plusBtn'),
      minusBtn = document.querySelector('#minusBtn');

let counter = document.querySelector('#counter');
let count = 0;

plusBtn.addEventListener('click', () => {
  count++;
  checkValue();
  counter.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count--;
  checkValue();
  counter.textContent = count;
});

function checkValue (){
  if (!(count === 0 || count < 0) ) {
    counter.style.color = 'green';
  } else if ( count < 0 ){
    counter.style.color = 'red';
  } else {
    counter.style.color = '#333333';
  }
}

// =============== another Solution =====================================

// (function(){
//   const buttons = document.querySelectorAll('.counterBtn')
//   let count= 0


//   //Add event listeners and functionailty to each button  
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(){
//       if (button.classList.contains('prevBtn')){
//         count--
//       } else if (button.classList.contains('nextBtn')){
//         count++
//       }

//       //Select the counter text
//       const counter = document.querySelector('#counter')
//       counter.textContent = count

//       if (count < 0 ){
//         counter.style.color = 'red'
//       } else if (count > 0){
//         counter.style.color = 'green'
//       } else {
//         counter.style.color = '#333333'
//       }
//     })
//   })
// })()