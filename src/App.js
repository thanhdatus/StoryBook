import React, { Component } from 'react';
import Filter from './components/Filter';
import CreatePost from './components/CreatePost';
import Suggest from './components/Suggest';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        {/* <Filter />
        <Suggest /> */}
        <CreatePost />
      </div>
    );
  }
}

export default App;
