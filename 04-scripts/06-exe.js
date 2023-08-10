let calculation = '';
function updatecalculation(sum) {
   calculation += sum
   document.querySelector(".total").innerHTML = calculation;
}
document.querySelector(".clear-btn").addEventListener( "click", () =>  {
   document.querySelector('.total').innerHTML = calculation = 0;
   document.querySelector('.prag').innerHTML = '';
})