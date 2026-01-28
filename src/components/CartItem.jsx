import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item" data-testid="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button 
          onClick={handleDecrease}
          className="quantity-btn"
          data-testid="decrease-btn"
        >
          -
        </button>
        <span data-testid="item-quantity">{item.quantity}</span>
        <button 
          onClick={handleIncrease}
          className="quantity-btn"
          data-testid="increase-btn"
        >
          +
        </button>
      </div>
      <p className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button 
        onClick={handleRemove}
        className="remove-btn"
        data-testid="remove-btn"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;