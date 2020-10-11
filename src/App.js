import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Page from './container/Page'


const App = () => {

    return(
      <div className="App">
        <Navbar />
        <Page />
      </div>
    )
}
export default App;