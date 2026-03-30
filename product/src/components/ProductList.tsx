import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/cartSlice";

const products = [
  { id: 1, name: "P1", price: 100 },
  {id: 2, name: "P2", price: 200 },
  {id: 3, name:"P3", price: 300},
  {id:4, name:"P4", price:400},
  {id:5,name:"P5", price:500},
  {id:6, name:"P6", price:600},

];

function ProductList() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="products">
      <h2 className="product-title">Products</h2>
      <nav>
              <Link to="/">Products</Link> |
              <Link to="/cart">Cart - {totalCount}</Link>
            </nav>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <p>product {p.name}</p>
            <p>price - {p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;