let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
