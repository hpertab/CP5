import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Blogs = () => {
   return (
        <div className="page-content">
            <div class = "center-types">
                <h1>2 YEARS OF FRIENDSHIP</h1>
                <p>Take a good look at pictures of us together!</p>
    
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img
          src={require("../images/2.jpg")}
          class="pageImage"
          alt="Christmas time!"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/20210110_135000_Original.jpg")}
          class="pageImage"
          alt="Our Pins"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/20210116_151341_Original.jpg")}
          class="pageImage"
          alt="Study Time"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img
          src={require("../images/IMG_0337_Original.jpg")}
          class="pageImage"
          alt="Temple time"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/received_246269113540451_Original.jpg")}
          class="pageImage"
          alt="giving tours"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/IMG_0551_Original.jpg")}
          class="pageImage"
          alt="Pretty faces"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img
          src={require("../images/received_689159395102884_Original.jpg")}
          class="pageImage"
          alt="Prank central!"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/20210108_120854_Original.jpg")}
          class="pageImage"
          alt="Hana Sleeping"
                            />
                        </div>
                        <div class="col">
                            <img
          src={require("../images/3.jpg")}
          class="pageImage"
          alt="Cringe"
                            />
                        </div>
                    </div>
                </div>
<div class="row-last"></div>

            </div>
    
        <footer>
            <a href = "https://github.com/briannaewhite/cp2">GitHub Code</a>
            <p class="yomama">Hana Pertab and Brianna White</p>
        </footer>

        </div>
  );
};

export default Blogs;