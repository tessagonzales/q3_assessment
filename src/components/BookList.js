import React, { Component } from 'react';
import { connect } from 'react-redux'
import Book from './Book'
// import { Button } from 'reactstrap'

class BookList extends Component {
  render() {

    console.log('bookList ======>', this.props);
    let allBooks = this.props.books.map(book => <Book key={book.id} book={book}/>)

    return (
      <div>
        {allBooks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(BookList);
