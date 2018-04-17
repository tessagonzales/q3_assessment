import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import BookList from './components/BookList'
import BookForm from './components/BookForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          
          <BookForm />
          <BookList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
