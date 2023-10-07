import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Addbooks.css'; // Import the CSS file

export default class Addbooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: '',
      author: '',
      description: '',
      price: '',
      image: '',
    };
  }

  addtodb = () => {
    const { bookname, author, description, price, image } = this.state;
    axios
      .post(`http://localhost:3003/books`, {
        bookname: bookname,
        author: author,
        description: description,
        price: price,
        image: image,
      })
      .then((res) => {
        console.log(res);
        alert('Your book added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { bookname, author, description, price, image } = this.state;
    return (
      <div className="bg-info" style={{ minHeight: '91.5vh' }}>
        <div className="container bg-warning py-2">
          <div className="mb-4">
            <div className="d-flex justify-content-center align-items-center py-4">
              <div>
                <h1 className="text-danger">Add the book</h1>
                <div className="form-container">
                  <form>
                    <div className="form-group">
                      <label className="font-weight-bold">Name</label><br />
                      <input
                        type="text"
                        placeholder="Enter the book name"
                        value={bookname}
                        onChange={(e) =>
                          this.setState({ bookname: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Author</label><br />
                      <input
                        type="text"
                        placeholder="Enter the author name"
                        value={author}
                        onChange={(e) =>
                          this.setState({ author: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Description</label><br />
                      <input
                        type="text"
                        placeholder="Enter the description"
                        value={description}
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold">Price</label><br />
                      <input
                        type="text"
                        placeholder="Enter the price"
                        value={price}
                        onChange={(e) =>
                          this.setState({ price: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Image</label><br />
                      <input
                        type="text"
                        placeholder="Enter the image URL"
                        value={image}
                        onChange={(e) =>
                          this.setState({ image: e.target.value })
                        }
                        required
                      />
                    </div>
                  </form>

                  <button className="btn btn-success d-flex justify-content-center"  onClick={this.addtodb} >
                    Submit
                  </button>
                </div>

                <NavLink to="/all-books" className="text-light">
                <button className="btn btn-danger d-flex justify-content-center" onClick={this.Viewbooks}>View Books</button>

                 
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
