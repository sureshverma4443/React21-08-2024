import { Outlet } from "react-router-dom";
import "./Explore.scss"
import Foryouexplore from "./foryou/Foryouexplore";
import Trending from "./trending/Trending";
import News from "./news/News";
import Sport from "./sport/Sport";
import Entertainment from "./entertainment/Entertainment";
import { LuSettings } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";







const Explore = () => {
    return (
      <div class=" h-100">
      <div class=" d-flex flex-row h-10 w-80 justify-content-around  p-1 ">     
    <div class="input-group mb-2  w-75 rounded "  >
    <div class="input-group-prepend ">
      <span class=" border border-dark  input-group-text h-100 text-light bg-dark" id="basic-addon1"><h6 ><RiSearchLine /></h6></span>
    </div>
    <input type="text" class=" border border-dark form-control h-100 w-90 text-light bg-dark" placeholder="Search " aria-label="Search" aria-describedby="basic-addon1"></input>
    </div>
    
      <div class=" h-25 text-dark "><h3 class="m-auto text-white"><LuSettings /></h3></div>
  
  
      
      </div>
      <div class='border-bottom border-dark  h-10 '>
      <ul  class="nav nav-pills d-flex justify-content-around w-100" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">For You</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trending</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">News</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Sports</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Entertainment</button>
    </li>
    
  
  </ul>
  <div className="Exploreimg"><img src="https://pbs.twimg.com/media/GZ3Pu-rboAAMz9A?format=png&name=small"></img></div>
  <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><Foryouexplore/></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><Trending/></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><News/></div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"><Sport/></div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"><Entertainment /></div>
</div>
  
  </div>
  
  </div>
  )}
      

export default Explore;
