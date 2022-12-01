import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-content">
        <h1 class = 'center-types'>PRESENTING..</h1>
    <h1 class = 'index-title'>Sister Brihana Adventures</h1>
    <p class = 'center-types'>Welcome to our beautiful adventure together, hope you enjoy! We met each other on the mission and now we still like to spend time together often.</p> 
    <p class = 'center-types'>Don't forget to check out cool pictures of us in our photos section!</p>
    
        <img
          src={require("../images/IMG_3337.JPG")}
          class="pageImage"
          alt="1966 Wedding"
          style={{alignSelf: 'center'}}
          />
   <footer>
      <a href = "https://github.com/briannaewhite/cp2">GitHub Code</a>
      <p class="yomama">Hana Pertab and Brianna White</p>
    </footer>

  </div>
  )
  
};

export default Home;