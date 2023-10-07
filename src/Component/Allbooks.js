import React, { Component } from 'react';
import axios from 'axios';
import './Allbooks.css';
import Cart from './Cart';

class Allbooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      cart: [],
      bookname: '',
      author: '',
      description: '',
      price: '',
      image: '',
      id: '',
      ratings: {},
      comments: {},
      popupbool: false,
      ratingInput: '',
      commentInput: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3003/books')
      .then((res) => {
        this.setState({ list: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleRate = (id, rating) => {
    this.setState((prevState) => ({
      ratings: {
        ...prevState.ratings,
        [id]: rating,
      },
    }));
  };

  handleComment = (id, comment) => {
    this.setState((prevState) => ({
      comments: {
        ...prevState.comments,
        [id]: comment,
      },
    }));
  };

  addToCart = (book) => {
    const { cart } = this.state;

    const isBookInCart =
      Array.isArray(cart) && cart.some((item) => item.id === book._id);

    if (!isBookInCart) {
      const newItem = {
        id: book._id,
        bookname: book.bookname,
        quantity: 1,
        price: book.price,
      };

      this.setState((prevState) => ({
        cart: [...(prevState.cart || []), newItem],
      }));

      alert('Added to Cart');
    } else {
      alert('Book is already in the Cart');
    }
  };

  removeFromCart = (id) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== id);
    this.setState({ cart: updatedCart });
  };

  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3003/books/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    alert('Deleted');
    window.location.reload();
  };

  cancel = (e) => {
    this.setState({ popupbool: false });
    e.preventDefault();
  };

  showPopup = (bookname, author, description, price, image, id) => {
    this.setState({
      bookname,
      author,
      description,
      price,
      image,
      id,
      popupbool: true,
    });
  };

  updateBook = () => {
    const { id, bookname, author, description, price, image } = this.state;
    axios
      .put(`http://localhost:3003/books/${id}`, {
        bookname,
        author,
        description,
        price,
        image,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    alert('Updated');
    window.location.reload();
  };

  handleRatingInputChange = (event) => {
    this.setState({ ratingInput: event.target.value });
  };

  handleCommentInputChange = (event) => {
    this.setState({ commentInput: event.target.value });
  };

  render() {
    const { bookname, author, description, price, image, cart, ratings, comments, ratingInput, commentInput } = this.state;

    return (
      <div>
        {/* Display Cart */}
        <Cart cart={cart} removeFromCart={this.removeFromCart} />
        <div className="group">
          {this.state.list.map((x) => (
            <div className="row" key={x._id}>
              <div className="col-6">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={x.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.bookname}</h5>
                    <h4>Author: {x.author}</h4>
                    <p className="card-text">{x.description}</p>
                    <h5> Price: {x.price}</h5>
                    <button
                      className="btn btn-primary d-flex justify-content-center"
                      onClick={() => this.deleteBook(x._id)}
                    >
                      Delete
                    </button>
                    <br></br>
                    <button
                      className="btn btn-primary d-flex justify-content-center"
                      onClick={() =>
                        this.showPopup(
                          x.bookname,
                          x.author,
                          x.description,
                          x.price,
                          x.image,
                          x._id,
                        )
                      }
                    >
                      Update
                    </button>
                    <br />
                    <button
                      className="btn btn-secondary d-flex justify-content-center"
                      onClick={() => this.addToCart(x)}
                    >
                      Add to cart
                    </button>
                    <br />

                    {/* Ratings button */}
                    <button
                      className="btn btn-info d-flex justify-content-center"
                      onClick={() => {
                        const rating = prompt('Enter your rating (1-5):');
                        if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
                          this.handleRate(x._id, parseInt(rating, 10));
                        } else {
                          alert('Please enter a valid rating (1-5).');
                        }
                      }}
                    >
                      Rate
                    </button>
                    <br />

                    {/* Comments button */}
                    <button
                      className="btn btn-success d-flex justify-content-center"
                      onClick={() => {
                        const comment = prompt('Enter your comment:');
                        if (comment) {
                          this.handleComment(x._id, comment);
                        } else {
                          alert('Please enter a comment.');
                        }
                      }}
                    >
                      Comment
                    </button>

                    {/* Display Ratings and Comments */}
                    <div>
                      <h2>Ratings</h2>
                      <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            role="button"
                            onClick={() => this.handleRate(x._id, star)}
                            style={{
                              color: star <= (ratings[x._id] || 0) ? 'gold' : 'gray',
                              fontSize: '1.5em', // Set the font size to make stars bigger
                              cursor: 'pointer',
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <h2>Comments</h2>
                      <textarea
                        value={comments[x._id] || ''}
                        onChange={(e) => this.handleComment(x._id, e.target.value)}
                        placeholder="Enter your comment..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {this.state.popupbool ? (
          <div className='popup'>
            <div className="container bg-warning py-2">

            <form className='form-updates'>
              <button className='popup-cancelpp' onClick={this.cancel}>
                X
              </button>
              <br></br>
              <form>
                <label>Name</label><br />
                <input
                  type='text'
                  value={bookname}
                  onChange={(e) => this.setState({ bookname: e.target.value })}
                  required
                />
                <br></br>
                <label>Author</label><br />
                <input
                  type='text'
                  value={author}
                  onChange={(e) => this.setState({ author: e.target.value })}
                  required
                />
                <br></br>
                <label>Description</label><br />
                <input
                  type='text'
                  value={description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                  required
                />
                <br></br>
                <label>Price</label><br />
                <input
                  type='text'
                  value={price}
                  onChange={(e) => this.setState({ price: e.target.value })}
                  required
                />
                <br></br>
                <label>Image</label><br />
                <input
                  type='text'
                  value={image}
                  onChange={(e) => this.setState({ image: e.target.value })}
                  required
                />
                <br></br>
                <br></br>

                <button className="btn btn-primary d-flex justify-content-center" onClick={this.updateBook}>Update</button>
              </form>
            </form>
            </div>
          </div>
        ) : (
          ''
        )}
        <br></br>
      </div>
    );
  }
}

export default Allbooks;
