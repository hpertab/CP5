import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Contact = () => {
   return (
    <div className="page-content">
    <div class = "center-types">
        <div class="bio-photo">
        
        <img
          src={require("../images/received_689159395102884_Original.jpg")}
          class="pageImage"
          alt="Prank central!"
         />
        
         </div>
    
        <h1>Hana Pertab and Brianna White</h1>
        <p /*style="font-size:20px"*/> Hey, our names are Hana and Brianna! <strong><em>RAWR XD!</em></strong>We met while on the mission! But it was a crazy ride getting there! </p>
        <p>Hana is from Centerville, Utah and was called to serve in Cambodia. She made it there for one month before covid struck and she 
        was sent home for a couple months before making it to California. Hana Served in Berkeley and then was out in San Ramon. She did 
        a couple more months living in near and doing social media in the mission home and split a ward with Brianna and her old companion
        . Finally Brianna came and served in Hana's section of the ward! Parties ensued for 2 weeks before Hana went back to Cambodia to 
        pretend to speak Khmer for her last 3 transfers. </p>
        
        <p>Brianna is from Boise, Idaho and she was called to serve in Italy (speaking Italian). She was reassigned before 
        making it there to Oakland California, with the wonder if she would ever make it to Italy. 
      One of the greatest blessings of this reassignment was that she was able to meet Hana. 
      Hana helped her in a lot of areas, especially how to have fun and laugh while working hard. 
     Then Hana left to Cambodia to do bigger and better things, leaving Brianna and her other companion 
     sad and afraid. Finally, Brianna was able to see the beautiful land of Italy a few months later. </p>
        
        <p /*style="font-size:15px"*/> We loved being mission companions in the Berkeley, CA family ward. Look around to see the things we did on the mission!</p>
        <p /*style="font-size:10px"*/>HE.. He.. he....</p>
    </div>
    
<div class="row-last"></div>
    
   <footer>
      <a href = "https://github.com/briannaewhite/cp2">GitHub Code</a>
      <p class="yomama">Hana Pertab and Brianna White</p>
    </footer>

  </div>
  )
};

export default Contact;
