import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { AuthProvider } from './Component/auth';
import Signup from './Component/Signup';
import Signupsuccess from './Component/Signupsuccess';
import Login from './Component/Login';
import Loginsuccess from './Component/Loginsuccess';
import Home from './Component/Home';
import Addbooks from './Component/Addbooks';
import Allbooks from './Component/Allbooks';
import EditDetails from './Component/EditDetails';
import Profile from './Component/Profile';
import Cart from './Component/Cart';  // Import the Cart component

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const isBookInCart = cart.some((item) => item.id === book._id);

    if (!isBookInCart) {
      const newItem = {
        id: book._id,
        bookname: book.bookname,
        quantity: 1,
        price: book.price,
      };

      setCart((prevCart) => [...prevCart, newItem]);
      alert('Added to Cart');
    } else {
      alert('Book is already in the Cart');
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <AuthProvider>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/profile" element={<Profile/>}/> 
          <Route path="/EditDetails" element={<EditDetails />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loginsuccess" element={<Loginsuccess />} />
          <Route path="/signupsuccess" element={<Signupsuccess />} />
          <Route path="/all-books" element={<Allbooks addToCart={addToCart} />}/>
          {window.location.pathname === '/cart' && (
            <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart}  />}
          />
          
          )}
          <Route path="/books" element={<Addbooks />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;