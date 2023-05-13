function updatePhonePrice(input) {
    const phoneinput = document.getElementById('phone-value');
    const phoneValue = phoneinput.value;
    const phoneValueNumber = parseInt(phoneValue);
    let newNumber ;
    if (input === true) {
        newNumber = phoneValueNumber + 1;
    }else{
        newNumber = phoneValueNumber - 1;
    }
    phoneinput.value = newNumber;
    return newNumber;
};

function phonePriceUpdate(newInputValue) {
    const newPrice = newInputValue * 1219;
    const phonePrice = document.getElementById('phonSpan');
    phonePrice.innerText = newPrice;
}




const incressPhone = document.getElementById('phone-plus');
incressPhone.addEventListener('click' , function () {
    const newInputValue = updatePhonePrice(true);
    phonePriceUpdate(newInputValue);
    updateSubtotal();
   
});



const decressPhone = document.getElementById('phone-minus');
decressPhone.addEventListener('click' , function () {
    const newInputValue = updatePhonePrice(false);
    phonePriceUpdate(newInputValue);
    updateSubtotal();
});

