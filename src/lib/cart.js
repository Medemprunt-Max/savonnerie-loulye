// ─── Cart Library ─── Savonnerie Loulye ───
// Persists to localStorage under key 'loulye-cart'
// Each item: { slug, name, price, image, qty }

const CART_KEY = 'loulye-cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent('cart-updated'));
}

export function addToCart(product, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.slug === product.slug);
  if (idx >= 0) {
    cart[idx].qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(slug) {
  const cart = getCart().filter((item) => item.slug !== slug);
  saveCart(cart);
  return cart;
}

export function updateQuantity(slug, qty) {
  const cart = getCart();
  const idx = cart.findIndex((item) => item.slug === slug);
  if (idx >= 0) {
    if (qty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].qty = qty;
    }
  }
  saveCart(cart);
  return cart;
}

export function getCartItems() {
  return getCart();
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function clearCart() {
  saveCart([]);
  return [];
}
