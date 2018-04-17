import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeBook } from '../redux/actions'
import { Button, Input, Row, Col, Label } from 'reactstrap'

class Book extends Component {

state = {
  sold: false
}

toggle = () => {
    let checked = "checked"
    this.setState({
        sold: !this.state.sold });
  };

  render(){
    // console.log('book props ~~~~>', this.props);
    const book = this.props.book


    if(this.state.sold === false) {
      return(
        <div style={{border:'1px solid lightgray', padding:20, marginBottom:20 }}>
          <Button
            color="danger"
            size="sm"
            style={{marginRight:5}}
            onClick={() => this.props.removeBook(book.id)}
          >x</Button>
          {book.title} : <i>{book.subtitle}</i><br />
          <small>By {book.author}</small> <br />
          About: {book.description} <br />
          <small><a href={book.website}>{book.website}</a></small><br />< br />


          <Row>
            <Col xs="6" sm="4"></Col>

            <Col xs="6" sm="4" style={{textAlign:"center"}}>
              <Input
                type="checkbox"
                onChange={this.toggle}
              />
              <Label>Not Sold</Label></Col>

            <Col xs="6" sm="4"></Col>
          </Row>

        </div>
      )

    } else {

      return(
        <div style={{border:'1px solid lightgray', padding:20, marginBottom:20 }}>
          <Button
            color="danger"
            size="sm"
            style={{marginRight:5}}
            onClick={() => this.props.removeBook(book.id)}
          >x</Button>
            {book.title} : <i>{book.subtitle}</i><br />
          <small>By {book.author}</small> <br />
          About: {book.description} <br />
          <small><a href={book.website}>{book.website}</a></small><br /><br />

          <Row>
            <Col xs="6" sm="4"></Col>

            <Col xs="6" sm="4" style={{textAlign:"center"}}>
              <Input
                type="checkbox"
                onChange={this.toggle}
              />
              <Label>Sold</Label></Col>

            <Col xs="6" sm="4"></Col>
          </Row>

        </div>
      )

    }
  };
}


const mapDispatchToProps = dispatch => bindActionCreators({
  removeBook
}, dispatch)


export default connect(null, mapDispatchToProps)(Book);



// <Button
//   style={{marginLeft:'47%'}}
//   outline color='info'
//   size='sm'
//   onClick={this.toggle}>Not Sold</Button>
