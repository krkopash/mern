import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../app/cartSlice";

function Cart() {
  const items = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();
const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
 
return (
    <div className="cart">
      <h5 className="cart-total">Total: {total}</h5>
      {items.length === 0 && <p>empty cart</p>}

      {items.map(item => (
  <div key={item.id} className="cart-item">
    <p>{item.name} - {item.price}*{item.quantity}</p>
<div className="cart-actions">
  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

    <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
      remove</button>
  </div>
    
  </div>
))}
    </div>
  );
}
export default Cart;