import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 && (
        <p>Your cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div className="cart-row" key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <div className="qty-controls">
            <button onClick={() => handleDecrease(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrease(item)}>+</button>
          </div>

          <button
            className="remove-btn"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default CartItem;
