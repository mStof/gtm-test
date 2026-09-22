// Banco de dados simulado com imagens realistas
const dbProducts = [
    { id: "SKU01", name: "Headphone Noise Cancelling", price: 899.00, category: "Eletrônicos", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
    { id: "SKU02", name: "Câmera Mirrorless", price: 4599.00, category: "Fotografia", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
    { id: "SKU03", name: "Smartwatch Series X", price: 1299.00, category: "Eletrônicos", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80" },
    { id: "SKU04", name: "Mochila Couro Premium", price: 349.00, category: "Acessórios", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80" }
];

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = getCart().length;
}

function addToCart(productId) {
    const product = dbProducts.find(p => p.id === productId);
    const cart = getCart();
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();

    eventAddToCart(cart);

    alert(`${product.name} foi adicionado ao carrinho!`);
}

function processPurchase(e) {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return alert("Carrinho vazio!");

    const transactionId = "TR_" + Math.floor(Math.random() * 999999);
    alert(`Compra confirmada! Pedido: ${transactionId}`);

    localStorage.removeItem('cart');
    window.location.href = "index.html";
}

function handleLogin(e) {
    e.preventDefault();
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
}

// Inicializa o badge na carga das páginas
document.addEventListener("DOMContentLoaded", updateCartBadge);