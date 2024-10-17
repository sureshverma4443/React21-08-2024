import logo from "./logo.svg";
import "./App.scss";

import Middle from "./components/Middle/middle";
import LeftSideBar from "./components/Leftsidebar/leftSideBar";
import RightSideBar from "./components/Rightsidebar/rightSideBar";
import { Route, Routes } from "react-router-dom";
import Foryou from "./components/Foryou/foryou";
import Following from "./components/Following/following";
import Explore from "./pages/explore/Explore";
import Foryouexplore from "./pages/explore/foryou/Foryouexplore";
import News from "./pages/explore/news/News";
import Trending from "./pages/explore/trending/Trending";
import Entertainment from "./pages/explore/entertainment/Entertainment";
import Sport from "./pages/explore/sport/Sport";
import Notification from "./pages/notifications/Notifications";

function App() {
  return (
    <div className="maincontainer">
      <LeftSideBar />
      <div className='Middle'>
      <Routes >
        <Route path="/">
          <Route path="Foryou" element={<Foryou />} />
          <Route path="Following" element={<Following />} />
          <Route path="" element={<Foryou />} />
        </Route>
        <Route path="/explore/" element={<Explore />}>          
        </Route>
        <Route path="/Notification/" element={<Notification />}>          
        </Route>
      </Routes>
      </div>
      <RightSideBar />
    </div>
  );
}

export default App;
