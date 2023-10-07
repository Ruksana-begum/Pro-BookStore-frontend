import React from 'react';

const Shop = ({ onAddToCart }) => {
  const sampleBook = {
    title: 'Sample Book',
    author: 'Author Name',
    price: 10,
  };

  const handleAddToCart = () => {
    // Trigger the onAddToCart callback to update the parent component
    onAddToCart && onAddToCart(sampleBook);

    // Display pop-up message
    window.alert('Added to Cart: ' + sampleBook.title);
  };

  return (
    <div>
      <h2>Shop</h2>
      <p>Book: {sampleBook.title}</p>
      <p>Author: {sampleBook.author}</p>
      <p>Price: ${sampleBook.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Shop;
