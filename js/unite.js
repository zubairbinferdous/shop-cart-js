function getPriceValue(elementId) {
    const phonetotal = document.getElementById(elementId);
    const phonetotalString = phonetotal.innerText;
    const phonetotalStringTonumber = parseInt(phonetotalString);
    return phonetotalStringTonumber;
}

function elementIdValue(element , value) {
    const subTotal = document.getElementById(element);
    subTotal.innerText = value;
}

function updateSubtotal(){
    const getPricePrice = getPriceValue('phonSpan');
    const getCasePrice = getPriceValue('span');
    const newAmount = getPricePrice + getCasePrice;
    elementIdValue('Subtotal' , newAmount);

    // calculate tax 
    const taxAmount = newAmount * 0.1;
    elementIdValue('Tax' , taxAmount.toFixed(2));

    //total 
    const total = newAmount + taxAmount
    elementIdValue('Total' , total);

}