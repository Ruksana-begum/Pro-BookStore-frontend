import React, { useEffect } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  useEffect(() => {
    console.log('Cart component rendered');
  }, [cart]);

 

  return (
  
    <div>
             

        {cart.length>0?(
            <div>
                      

      <h2>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.bookname}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>):(
        <p>Cart is empty</p>
        // <Cart cart={cart} removeFromCart={this.removeFromCart} /> 
      )}
      {/* //  Display Cart */}
     {/* <Cart cart={cart} removeFromCart={this.removeFromCart} /> */}
    </div>
    
  );
};

export default Cart;
