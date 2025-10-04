import React from "react";
import "./ocean-background.css";

export default function OceanBackground({ children }) {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      backgroundImage: 'linear-gradient(0deg, #022244, #58c8da)'
    }}>
      {/* about */}
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
        <a className="bg_links logo" href="#"></a>
      </div>
      
      {/* ocean */}
      <div className="ocean">
        <div className="bubbles">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="fish">
          {/* eyes */}
          <span></span>
          <span></span>
          {/* mouth */}
          <span></span>
          {/* bubbles */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Content wrapper with proper positioning */}
      {children && (
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          overflow: 'auto',
          pointerEvents: 'auto'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}