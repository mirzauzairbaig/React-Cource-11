// import logo from './logo.svg';
// import './App.css';
import react from "react";
import { useState } from "react";
function App() {
  const Parent = () => {
    console.log("Parent Clicked");
  };
  const Child = () => {
    console.log("Child Clicked");
  };
  return (
    <div className="App">
      <div onClick={Parent}>
        <button>Parent</button>
        <h1>Talha</h1>
        <div>
          <button onClick={Child}>Child</button>
        </div>
      </div>
    </div>
  );
}

export default App;
