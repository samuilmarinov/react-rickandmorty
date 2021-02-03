import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'; 
import { MDBRow, MDBCol } from "mdbreact";

class Searchform extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  
    let searchterm = this.state.value;
    var searchroot = '/character/';
    var searchfinal = searchroot + searchterm;
    this.props.history.push(searchfinal);
  }

  render() {

    return (

       
    <MDBRow className="homepage">
    
     <MDBCol lg="12" className="searchbox">
    
      </MDBCol>

        <MDBCol lg="12" className="text-center text-lg-center searchboxinput">
        <form className="formsearch" onSubmit={this.handleSubmit}>
        <h2 className="searchtitle"> Search characters by name:</h2>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
      </MDBCol>
    </MDBRow>
    
    );
  }
}

export default withRouter(Searchform);