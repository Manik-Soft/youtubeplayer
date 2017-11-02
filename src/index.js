import _ from 'lodash';
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
    this.state = {
      videos : [],
      selectedVideo : null
     };
     this.videoSearch('Algorithms');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      });
      console.log(videos);
    });
  }

  render(){

    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);
    return(
      <div>
        <Searchbar
          onSearchTermChange = {videoSearch}
        />
        <VideoDetail
          video={this.state.selectedVideo}
          />
        <VideoList
          videos={this.state.videos}
          onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}


// Take this component, generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
