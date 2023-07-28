let calculation = localStorage.getItem("store");
function updatecalculation(sum) {
   calculation += sum;
   document.querySelector(".total").innerHTML = calculation;
}

localStorage.setItem("store", calculation);