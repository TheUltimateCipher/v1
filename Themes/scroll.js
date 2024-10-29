document.addEventListener('DOMContentLoaded', function () {
  const square = document.querySelector('.square');

  function checkOverflow() {
    console.log("checked");
    if (square.scrollHeight > square.clientHeight) {
      // Content is overflowing, disable justify-content: center;
      square.style.justifyContent = 'flex-start'; // Align content to the top
    } else {
      // Content fits, keep it centered
      square.style.justifyContent = 'center';
    }
  }

  // Initial check
  checkOverflow();

  // Optionally, recheck if the window is resized
  window.addEventListener('resize', checkOverflow);
});
//------------------------------------------------------------------------------
// window.addEventListener('load', function () {
//   const square = document.querySelector('.square');

//   function checkOverflow() {
//     console.log("checked");
//     if (square.scrollHeight > square.clientHeight) {
//       // Content is overflowing, disable justify-content: center;
//       square.style.justifyContent = 'flex-start'; // Align content to the top
//     } else {
//       // Content fits, keep it centered
//       square.style.justifyContent = 'center';
//     }
//   }

//   // Initial check once the entire window (including images) is fully loaded
//   checkOverflow();

//   // Optionally, recheck if the window is resized
//   window.addEventListener('resize', checkOverflow);
// });
//------------------------------------------------------------------------------
