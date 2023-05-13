function updateFunction(input) {
  const inputValue = document.getElementById("inputValue");
  const getValue = inputValue.value;
  const getValueToNumber = parseInt(getValue);
  let newCaseNumber;
  if (input === true) {
    newCaseNumber = getValueToNumber + 1;
  }else{
    newCaseNumber = getValueToNumber - 1;
  }
  inputValue.value = newCaseNumber;
  return newCaseNumber;
}

function updatePrice(newCaseNumber) {
    const newPrice = newCaseNumber * 59 ;
    const totalPrice = document.getElementById('span');
    totalPrice.innerText = newPrice;
}


const incressButton = document.getElementById("incress");
incressButton.addEventListener("click", function () {
    const newCaseNumber =  updateFunction(true);
    updatePrice(newCaseNumber);
    updateSubtotal();
});

const decressButton = document.getElementById("decress");
decressButton.addEventListener("click", function () {
    const newCaseNumber =  updateFunction(false);
    updatePrice(newCaseNumber);
    updateSubtotal();
});


