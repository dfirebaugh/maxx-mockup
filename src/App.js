import React, { Component } from 'react';
import MainSlider from './Components/MainSlider.js';
import TopNav from './Components/TopNav.js';
import PortfolioObjs from './Components/PortfolioObjs.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <TopNav />
        </div>
        <div className='container'>
        </div>
          <MainSlider />
          <div className="mainPage-content">
            <PortfolioObjs/>
          </div>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">© 2016  <span className="underline">{`Sam's Web Dev`}</span> All Rights Reserved. </p>

          </div>
        </footer>
      </div>
    );
  }
}

export default App;
