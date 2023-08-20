let total = 0;
let couponCode = '';
let discount = 0;

function addToCart(target) {
    const selectedItemContainer = document.getElementById('selected-item');
    const getTitle = target.childNodes[3].childNodes[5].innerText;
    const count = selectedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.classList.add('font-bold', 'text-2xl', 'my-4');
    p.innerHTML = `${count + 1}. ${getTitle}`;
    selectedItemContainer.appendChild(p);

    const price = target.childNodes[3].childNodes[7].innerText.split(' ')[0];
    total += parseFloat(price);
    document.getElementById('Total Price').innerText = total;
    updateButtonState();  
}

// Enable or disable the button
function updateButtonState() {
    const purchaseButton = document.getElementById('btn-purchase');
    const applyButton = document.getElementById('btn-disable');
    const discountElement = document.getElementById('Discount price');
    const totalElement = document.getElementById('total');

    // Enable or disable the button based on the total price
    if (total > 0) {
        purchaseButton.removeAttribute('disabled');
    } else {
        purchaseButton.setAttribute('disabled', 'true'); 
    }
    
    // Enable or disable the apply button based on the total price and coupon code
    if (total >= 200 && couponCode === 'SELL200') {
        applyButton.removeAttribute('disabled');
        // Calculate discount and total cost
        discount = total * 0.2;
    } else {
        applyButton.setAttribute('disabled', 'true');
        discount = 0;
    }
    const totalCost = total - discount;

    discountElement.innerText = discount.toFixed(2);
    totalElement.innerText = totalCost.toFixed(2);
}

// Function to the coupon code
document.getElementById('btn-confirm').addEventListener('input', function () {
    couponCode = this.value;
    updateButtonState();
});

// Reset all Data
function resetPurchaseForm() {
    document.getElementById('selected-item').innerHTML = '';
    document.getElementById('Total Price').innerText = '';
    document.getElementById('Discount price').innerText = '';
    document.getElementById('total').innerText = '';

    document.getElementById('btn-purchase').setAttribute('disabled', 'true');
    document.getElementById('btn-disable').setAttribute('disabled', 'true');

    document.getElementById('btn-confirm').value = '';

    // Close the modal 
    const modal = document.getElementById('my_modal_5');
    if (modal.open) {
        modal.close();
    }
}

