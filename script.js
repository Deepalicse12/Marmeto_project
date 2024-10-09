console.log('====================================');
console.log("Connected");
console.log('====================================');
document.querySelector('.quantity input').addEventListener('input', function() {
    const price = 250000;
    const quantity = parseInt(this.value);
    const subtotal = price * quantity;

    document.querySelector('.subtotal').innerText = Rs. $subtotal.toFixed(2);
    document.querySelector('.cart-totals p span').innerText = Rs. $subtotal.toFixed(2);
});
