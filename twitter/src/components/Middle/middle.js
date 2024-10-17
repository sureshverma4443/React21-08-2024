import { Outlet, Route, Routes } from "react-router-dom";
import Following from "../Following/following";
import Foryou from "../Foryou/foryou";
import "./middle.scss";
import Navbuttons from "./Navbuttons/navButtons";
import Newpost from "./Newposts/newposts";
import Posts from "./Posts/posts";

const Middle = () => {
  return (
    <div className="Middle">
      <Outlet/>
    </div>
  );
};

export default Middle;
