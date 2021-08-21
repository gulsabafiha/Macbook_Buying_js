// Product cost function
function costSet(product,cost) {
    const inputVlaue = document.getElementById(product+'-cost');
    inputVlaue.innerText = cost;  
}


//Add EVenthadler to all buttons
//Memory cost eventhandler
document.getElementById('eightgb-memory').addEventListener('click', function () {
    costSet('memory', 0);
    totalCost();
    totalPrice();
})
document.getElementById('sixteengb-memory').addEventListener('click', function () {
    costSet('memory', 180);
    totalCost();
    totalPrice();
})

//Storage cost eventhandler
document.getElementById('256-st').addEventListener('click', function () {
    costSet('storage', 0);
    totalCost();
    totalPrice();
})
document.getElementById('512-st').addEventListener('click', function () {
    costSet('storage', 100);
    totalCost();
    totalPrice();
})
document.getElementById('1tb-st').addEventListener('click', function () {
    costSet('storage', 180);
    totalCost();
    totalPrice();
})

//Delivery Charge eventhandler
document.getElementById('free-delivery').addEventListener('click', function () {
    costSet('delivery', 0);
    totalCost();
    totalPrice();
})
document.getElementById('charge-delivery').addEventListener('click', function () {
    costSet('delivery', 20);
    totalCost();
    totalPrice();
})

//Total Price
function getValue(id) {
    const getInput = document.getElementById(id+'-cost').innerText;
    const getCost = parseFloat(getInput);
    return getCost;
}
function totalCost() {
    const totalValue = document.getElementById('total-cost');
    totalValue.innerText = getValue('fix') + getValue('memory') + getValue('storage') + getValue('delivery');
}

//Bottom Total Price Update
function totalPrice() {
    const totalField = document.getElementById('total-price');
    const totalText = totalField.innerText;
    const fullCost = getValue('fix') + getValue('memory') + getValue('storage') + getValue('delivery');
    totalField.innerText = fullCost;
    const fullprice = parseFloat(fullCost);
    return fullprice;
}

//Promo code related function
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value;
    const totalprice = totalPrice();

    const totalField = document.getElementById('total-price');
    promoInput.value = '';
    if (promoValue == 'stevekaku') {
        const discountPrice = totalprice * (20/100);
        totalField.innerText = totalprice - discountPrice;
    }
    else {
        totalField.innerText =  totalprice;
    }
})