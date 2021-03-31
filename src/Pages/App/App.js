import logo from '../../logo.svg';
import '../../App.css';
import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Description from './Body/Description';
import StockSelect from './Body/StockSelect';
import OptionsChain from './Body/OptionsChain';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <div className="App">
        <Header/>
        <Description/>
        <StockSelect/>
        <OptionsChain/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Footer/>
      </div>
    )
  }
}
export default App;
