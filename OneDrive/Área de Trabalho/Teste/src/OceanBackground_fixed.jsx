import React from "react";
import "./ocean-fixed.css";

export default function OceanBackground({ children }) {
  return (
    <div className="ocean-container">
      {/* About/Social Links */}
      <div className="about">
        <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" rel="noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank" rel="noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" rel="noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links logo" href="#" onClick={(e) => e.preventDefault()}></a>
      </div>
      
      {/* Ocean animations */}
      <div className="ocean">
        <div className="bubbles">
          {Array.from({length: 8}, (_, i) => <span key={i}></span>)}
        </div>
        <div className="fish">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
}