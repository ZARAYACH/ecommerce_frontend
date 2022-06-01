import './App.css';
import React from 'react';
import Landing from './component/index/landing';
import NavBar from './component/header/navBar';

function App() {
  return(
   <div className='container'>
      <NavBar/>
      <Landing/>
   </div>
  );
}

export default App;


