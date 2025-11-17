import React from "react";
import Game from "./components/Game"; // keep this import (Game.jsx)
import "./App.css"; // optional, ok if present

export default function App() {
  // Inline container style forces perfect centering regardless of other CSS
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222",   // dark background to match your screenshot
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  };

  // inner wrapper keeps game content a reasonable max width
  const innerStyle = {
    width: "100%",
    maxWidth: "900px",
  };

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <Game />
      </div>
    </div>
  );
}
