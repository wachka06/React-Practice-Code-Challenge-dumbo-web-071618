import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // When I use constructor, I need to use "this.state"

  state = {
    sushiArray: []
  }

  // It's same as DOMCotentLoaded!
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiArray => {
      this.setState({sushiArray})
    })
  }

  render() {
    console.log("STATE", this.state.sushiArray)

    return (
      <div className="app">
        <SushiContainer sushiArray={this.state.sushiArray} />
        <Table />
      </div>
    );
  }
}

export default App;
