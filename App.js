import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Fixed import path for react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "../Components-20241212/AddBook";
import Book_UpDateForm from "../Components-20241212/BookUpdate";
import FncDisplayBooks from "../Components-20241212/DsplyBk_fncCompt";
import DeleteBook from "../Components-20241212/Delete_Book";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center>
            <h2>Online Book Library Using React</h2>
          </center>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light bg-success"> {/* Corrected className typo */}
            <Link to="/" className="navbar-brand">
              <h4>Add a Book</h4>
            </Link>
            <Link to="/DisplayBooksF1" className="navbar-brand">
              <h4>Display All Books</h4> {/* Fixed HTML syntax */}
            </Link>
          </nav>
          <br />
          <Routes>
            <Route path="/" element={<Book_Form />} />
            <Route path="/edit/:id" element={<Book_UpDateForm />} /> {/* Corrected route path */}
            <Route path="/delete/:id" element={<DeleteBook />} /> {/* Fixed typo in 'element' */}
            <Route path="/DisplayBooksF1" element={<FncDisplayBooks />} /> {/* Fixed syntax */}
          </Routes>
        </div>
      </Router>
    );
  }
}