import React from 'react'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Footer from './components/main/Main';
import './App.scss';

const App=()=> {
  return (
    <div className="main_containcer">
      <Navbar/>      
      <Sidebar/>
      <Main/>
      <Footer/>

    </div>

  )
}

export default App;
