import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, getCartTotal, getCartCount, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart" data-testid="cart">
        <h2>Shopping Cart</h2>
        <p className="empty-cart" data-testid="empty-cart">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="cart" data-testid="cart">
      <h2>Shopping Cart ({getCartCount()} items)</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total" data-testid="cart-total">
          Total: ${getCartTotal().toFixed(2)}
        </p>
        <button 
          className="clear-cart-btn"
          onClick={clearCart}
          data-testid="clear-cart-btn"
        >
          Clear Cart
        </button>
        <button className="checkout-btn" data-testid="checkout-btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;