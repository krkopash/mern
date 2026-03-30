import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
   
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);