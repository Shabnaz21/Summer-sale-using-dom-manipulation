let total = 0;

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
    const TotalPriceValue = (document.getElementById('Total Price').innerText = total);
    document.getElementById('btn-confirm').addEventListener('keyup', function (event) {
        const text = event.target.value;
        const deleteButton = document.getElementById('btn-disable');
        if (text == 'SELL200' || price < 200) {
            deleteButton.removeAttribute('disabled');
        }
        else {
            deleteButton.setAttribute('disabled', true)
        }
    })
    if (TotalPriceValue == 0) {
        deleteButton.removeAttribute('disabled');
    }
}

