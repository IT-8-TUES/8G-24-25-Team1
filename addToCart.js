let cartCount = 0;
let addedElements = [];
let addedElementsPrice = [];
const cartItemCountElement = document.getElementById('cart-item-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartElement = document.getElementsByClassName('cart')[0];

const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items-list');
const closeCartButton = document.getElementById('close-cart');

const cartItemPriceElement = document.getElementById('cart-item-price');

function updateCartDisplay() {
    cartItemCountElement.textContent = cartCount;
}

function updateCartTotal() {
    let total = 0;
    for (let i = 0; i < addedElementsPrice.length; i++) {
        total += parseInt(addedElementsPrice[i]);
    }
    cartItemPriceElement.textContent = total;
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const yachtName = button.dataset.yachtName;
        const yachtPrice = parseInt(button.dataset.yachtPrice);
        cartCount++;
        addedElements.push(yachtName);
        addedElementsPrice.push(yachtPrice);
        updateCartDisplay();
        updateCartTotal();
    });
});

function showCartItems() {
    cartItemsList.innerHTML = '';

    for (let i = 0; i < addedElements.length; i++) {
        let item = addedElements[i] + " - $" + addedElementsPrice[i];
        const listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
    };
    cartModal.style.display = "flex";
}

function hideCartItems() {
    cartModal.style.display = "none";
}

cartElement.addEventListener('click', showCartItems);
closeCartButton.addEventListener('click', hideCartItems);

updateCartDisplay();