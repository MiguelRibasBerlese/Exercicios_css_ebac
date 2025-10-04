import React from "react";

export default function OceanBackground({ children }) {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative',
      backgroundImage: 'linear-gradient(0deg, #022244, #58c8da)',
      overflow: 'hidden'
    }}>
      {/* Simple ocean waves without complex CSS */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '120%',
        height: '120px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '100%',
        transform: 'translateX(-10%)',
        animation: 'simpleWave 10s ease-in-out infinite'
      }}></div>
      
      {/* Content wrapper */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        overflow: 'auto'
      }}>
        {children}
      </div>
      
      {/* Add simple keyframes via style tag */}
      <style jsx>{`
        @keyframes simpleWave {
          0%, 100% { transform: translateX(-10%) rotate(-2deg); }
          50% { transform: translateX(-10%) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}