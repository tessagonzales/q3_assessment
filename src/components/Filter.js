import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterSearch } from '../redux/actions'

class Filter extends Component {
  render() {
    console.log('FILTER SEARCH ===>', this.props.filterSearch)
    //console.log('BOOK PROPS ~~~~~>', this.props.books)
   return (
        <div className='row'>
        <div className="col-sm"></div>

        <div className="col-sm">
        <Form
          style={{marginTop:15, marginBottom:50}}
        >
          <FormGroup>
            <Input
              type='text'
              placeholder='Search Books'
              onChange = { (e) => {
                console.log(e.target.value)
                this.props.filterSearch(e.target.value)
              }}
            />
          </FormGroup>
        </Form>
        </div>

        <div className="col-sm"></div>
        </div>
        );
      }
    }

    const mapStateToProps = state => ({
      books: state
    })

    const mapDispatchToProps = dispatch => bindActionCreators({
      filterSearch
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
