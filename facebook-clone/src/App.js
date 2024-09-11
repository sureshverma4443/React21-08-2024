import React from 'react'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Footer from './components/main/Main';
import './App.scss';
import Mainright from './components/mainright/Mainright';

const App=()=> {
  return (
    <div className="main_containcer">
      <Navbar/>      
      <Sidebar/>
      <Main/>
      <Mainright/>
      <Footer/>

    </div>

  )
}

export default App;
