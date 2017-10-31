import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyAIVtRs2cddQP7DZRMcDUHdCRWYdNPmgUw';




// Create a new component. This component should produce some HTML
class App extends Component{

  constructor(props){
    super(props);
    this.state = { videos : [] };

    YTSearch({key: API_KEY, term: 'fmovie'}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });
  }

  render(){
    return(
      <div>
        <Searchbar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


// Take this component, generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
