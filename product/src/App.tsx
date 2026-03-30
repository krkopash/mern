import { Link} from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import "./index.css";

function App() {
  const items = useAppSelector(state => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav> 
    </div>
  );
}

export default App;