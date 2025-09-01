import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Tools</h2>
          <p>
            Explore our tools.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                  <i className={d.icon}></i>
                  </a>
                  <div className="service-desc">
                    <h3>
                      <a href={d.link} target="_blank" rel="noopener noreferrer"style={{ color: "white", textDecoration: "none" }}>
                        {d.name}
                      </a>
                    </h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
