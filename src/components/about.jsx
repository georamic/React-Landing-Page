import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <h3>Join Us</h3>
              
                {props.data ? props.data.Why : "loading..."}
                <br /><br />
                <a href="#contact">Get in Touch</a>
                <br />
                Join Pranik's <a href="https://pranikkoirala.kit.com/0e0872c420">Newsletter</a>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
