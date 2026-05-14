const cart = [];
let total = 0;

function formatCurrency(amount) {
    return `₹${amount.toFixed(0)}`;
}

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartSummary = document.getElementById("cartSummary");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartSummary.textContent = "Your cart is empty. Select a dish to begin.";
    } else {
        cartSummary.textContent = `You have ${cart.length} item${cart.length > 1 ? 's' : ''} ready for checkout.`;
    }

    cart.forEach(food => {
        const li = document.createElement("li");
        li.textContent = `${food.item} — ${formatCurrency(food.price)}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: ${formatCurrency(total)}`;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add a dish before checking out.");
        return;
    }

    alert(`Thank you for choosing FoodieX! Your order for ${cart.length} item${cart.length > 1 ? 's' : ''} is being prepared.`);
}

document.getElementById("orderBtn").addEventListener("click", () => {
    document.querySelector('.menu-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("checkoutBtn").addEventListener("click", proceedToCheckout);
