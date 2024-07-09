import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Signup from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';
import Alluser from '../pages/Alluser';
import Allproducts from '../pages/Allproducts';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import Success from '../pages/Success'
import Cancel from '../pages/Cancel';
import OrderPage from '../pages/OrderPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "sign-up",
        element: <Signup />
      },
      {
        path: "product-category",
        element: <CategoryProduct />
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "success",
        element: <Success />
      },
      {
        path: "cancel",
        element: <Cancel />
      },
      {
        path: "search",
        element: <SearchProduct />
      },
      {
        path: "order",
        element: <OrderPage />
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <Alluser />,
          },
          {
            path: "all-products",
            element: <Allproducts />
          }
        ]
      },

    ]
  }
])

export default router;