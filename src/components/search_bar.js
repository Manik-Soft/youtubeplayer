import React, { Component } from 'react';


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
      <div className="search-bar">
        <input
          onChange={e => this.onInputChange(e.target.value)}
          value = {this.state.term}
          />
      </div>
    );


  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default Searchbar;
