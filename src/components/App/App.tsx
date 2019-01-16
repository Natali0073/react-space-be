import * as React from 'react';
import * as Header from '../Header/Header';
import * as Routes from '../Routes/Routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Component} from "react";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Routes />
          <ToastContainer />
        </div>
    );
  }
}

export default App;
