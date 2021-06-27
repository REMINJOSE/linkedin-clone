import React from 'react';
import Sidebar from './Sidebar'
import './App.css';
import Header from './Header';
import Feed from './Feed';

function App() {
  return (
    <div className="app">      
        <Header/>

      {/*App body*/}
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        {/*Widgets*/}
      </div>
        
    </div>
  );
}

export default App;
