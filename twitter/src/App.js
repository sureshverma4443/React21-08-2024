import logo from './logo.svg';
import './App.scss';

import Middle from './components/Middle/middle';
import LeftSideBar from './components/Leftsidebar/leftSideBar';
import RightSideBar from './components/Rightsidebar/rightSideBar';

function App() {
  return(
    <div className="maincontainer">
      <LeftSideBar/>
      <Middle/>
      <RightSideBar />
    </div>

  )
}

export default App;
