import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common';
import { useEffect, useState } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
      headers: {
        'Content-Type': 'application/json', // Optional, but good practice
      },
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

    // console.log("data-user", dataResponse);
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
    // console.log("dataApi", dataApi)
  }

  useEffect(() => {
    // Fetch user details
    fetchUserDetails();
    // user Details cart product
    fetchUserAddToCart()
  }, []);

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // user details fetch
        cartProductCount,  // current user add to cart product count
        fetchUserAddToCart

      }}>
        <ToastContainer 
           position='top-center'
        />
        {/* Header component will show all the pages, that's why we import it to App.jsx */}
        <Header />
        {/* Outlet displays all the pages which we created inside routes folder */}
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
