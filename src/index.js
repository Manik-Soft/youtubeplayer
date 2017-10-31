import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyAIVtRs2cddQP7DZRMcDUHdCRWYdNPmgUw';




// Create a new component. This component should produce some HTML
class App extends Component{

  constructor(props){
    super(props);
    this.state = { videos : [] };

    YTSearch({key: API_KEY, term: "react js"}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });
  }

  render(){
    return(
      <div>
        <Searchbar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


// Take this component, generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
