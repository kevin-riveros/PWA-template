/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";
import Offline from "./components/Offline";

function App() {
  return (
    <div className="App">
      <Offline />
      <div style={{ height: "100vh" }}>
        <img
          src="https://i.ibb.co/wC8G4Z4/Captura-de-Pantalla-2021-11-21-a-la-s-23-53-24.png"
          alt="image"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <h1>Version 53</h1>
    </div>
  );
}

export default App;
