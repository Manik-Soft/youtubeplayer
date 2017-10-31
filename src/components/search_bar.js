import React, { Component } from 'react';
const API_KEY = 'AIzaSyAIVtRs2cddQP7DZRMcDUHdCRWYdNPmgUw';


class Searchbar extends Component {

  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  componentWillMount(){
    console.log(this.state.term);
  }
  componentDidMount(){
    console.log(this.state.term);
  }
  componentWillUpdate(){
    console.log(this.state.term);
  }

  render(){
    return (
      <div>
        <input
          onChange={e => this.setState({term: e.target.value})}
          value = {this.state.term}
          />
        <br/><p>Value is {this.state.term}</p>
      </div>
    );
  }
  //
  // onInputChange(event){
  //   console.log(event);
  // }
}

export default Searchbar;
