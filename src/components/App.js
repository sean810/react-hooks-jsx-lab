import React from "react";
import NavBar from "./NavBar"; // Remove './components/' since you're already in the components folder
import Home from "./Home"; 
import About from "./About"; 

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
