import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addBook } from '../redux/actions'

class BookForm extends Component {

  state = {
    title: '',
    subtitle: '',
    author: '',
    description: '',
    website: ''
  }

  render() {
    //console.log('addBookFunc ===>', this.props);

    return (
      <Form style={{ marginTop: 30, marginBottom: 30}}>
        <FormGroup>
          <Label style={{margin:0}}>Title:</Label>
          <Input
            type="text"
            value={this.state.book}
            onChange={e => this.setState({ title:e.target.value })}
          />
        </FormGroup>

      <FormGroup>
         <Label style={{margin:0}}>Subtitle:</Label>
         <Input
           type="text"
           value={this.state.book}
           onChange={e => this.setState({ subtitle:e.target.value })}
         />
      </FormGroup>

      <FormGroup>
         <Label style={{margin:0}}>Author:</Label>
         <Input
           type="text"
           value={this.state.book}
           onChange={e => this.setState({ author:e.target.value })}
         />
      </FormGroup>

      <FormGroup>
         <Label style={{margin:0}}>Description:</Label>
         <Input
           type="text"
           value={this.state.book}
           onChange={e => this.setState({ description:e.target.value })}
         />
      </FormGroup>

      <FormGroup>
         <Label style={{margin:0}}>Website URL:</Label>
         <Input
           type="text"
           value={this.state.book}
           onChange={e => this.setState({ website:e.target.value })}
         />
      </FormGroup>

      <Button
        outline color="info"
        onClick={ () => this.props.addBookFunc(this.state) }
      >Submit</Button>
       </Form>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addBookFunc: addBook
}, dispatch)

export default connect(null, mapDispatchToProps)(BookForm);
